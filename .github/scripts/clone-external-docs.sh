#!/bin/bash
set -euo pipefail

# Repository mapping table: SOURCE_REPO_URL SOURCE_REPO_PATH DESTINATION_REPO_PATH
REPO_MAPPINGS=(
  "https://github.com/cnoe-io/reference-implementation-aws docs docs/reference-implementation/aws/docs"
  "https://github.com/cnoe-io/reference-implementation-aws README.md docs/reference-implementation/aws"
  "https://github.com/cnoe-io/reference-implementation-aws examples docs/tutorials/aws"
  "https://github.com/cnoe-io/reference-implementation-aws CONTRIBUTING.md docs/contributing/aws-ref-impl-CONTRIBUTING.md"
)

for mapping in "${REPO_MAPPINGS[@]}"; do
  read -r repo_url source_path dest_path <<< "$mapping"
  
  # Create unique temp directory for each repo
  tmp_dir="/tmp/$(basename "$repo_url" .git)"
  
  # Clone if not already cloned
  if [[ ! -d "$tmp_dir" ]]; then
    git clone "$repo_url" "$tmp_dir"
  fi
  
  # Check if destination is a file (has extension) or directory
  if [[ "$dest_path" == *.* ]]; then
    # Destination is a file - create parent directory and copy single file
    mkdir -p "$(dirname "$dest_path")"
    {
      echo "---"
      echo "custom_edit_url: $repo_url/blob/main/$source_path"
      echo "---"
      echo
      cat "$tmp_dir/$source_path"
    } > "$dest_path"
  else
    # Destination is a directory - remove and recreate to overwrite files
    mkdir -p "$dest_path"
    
    # Copy files with frontmatter maintaining directory structure
    if [[ -d "$tmp_dir/$source_path" ]]; then
      find "$tmp_dir/$source_path" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
        rel_path="${file#$tmp_dir/}"
        rel_subpath="${file#$tmp_dir/$source_path/}"
        target_dir="$dest_path/$(dirname "$rel_subpath")"
        mkdir -p "$target_dir"
        target="$dest_path/$rel_subpath"
        {
          echo "---"
          echo "custom_edit_url: $repo_url/blob/main/$rel_path"
          echo "---"
          echo
          cat "$file"
        } > "$target"
      done
      
      # Copy non-markdown files maintaining structure
      find "$tmp_dir/$source_path" -type f ! -name "*.md" -print0 | while IFS= read -r -d '' file; do
        rel_subpath="${file#$tmp_dir/$source_path/}"
        target_dir="$dest_path/$(dirname "$rel_subpath")"
        mkdir -p "$target_dir"
        cp "$file" "$dest_path/$rel_subpath"
      done
    elif [[ -f "$tmp_dir/$source_path" ]]; then
      target="$dest_path/$(basename "$source_path")"
      {
        echo "---"
        echo "custom_edit_url: $repo_url/blob/main/$source_path"
        echo "---"
        echo
        cat "$tmp_dir/$source_path"
      } > "$target"
    fi
  fi
done
