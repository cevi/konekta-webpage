#!/bin/bash

# --- CONFIGURATION ---
# Define your replacement rules here.
#
# - file_glob_pattern: A pattern to match files (e.g., "**/*.js", "src/**/*.css").
# - string_to_find: The exact text to search for.
# - replacement_string: The text to replace it with.
#
# NOTE: If your search/replace strings contain special characters for `sed`
# (like `*`, `[`, `]`, `.`, `\`, `&`), you may need to escape them with a backslash.

declare -a replacements=(
  "**/*|conveniat27.cevi.tools|konekta.cevi.tools"
  "**/*|conveniat27.ch|konekta.ch"
  "**/*.tsx|conveniat27|Konekta"
  "**/*.ts|conveniat27|Konekta"
)

shopt -s globstar nullglob

script_name=$(basename "$0")

for rule in "${replacements[@]}"; do
  IFS='|' read -r file_glob_pattern string_to_find replacement_string <<< "$rule"

  echo "---"
  echo "Applying rule:"
  echo "  - Files:     $file_glob_pattern"
  echo "  - Searching: '$string_to_find'"
  echo "  - Replacing: '$replacement_string'"
  echo ""

  for file in $file_glob_pattern; do
    if [[ $(basename "$file") == "$script_name" ]]; then
      continue
    fi

    if [ -f "$file" ] && grep -qF "$string_to_find" "$file"; then
      # Perform the in-place replacement using `sed`.
      sed -i "s#${string_to_find}#${replacement_string}#g" "$file"
      echo "Updated: $file"
    fi
  done
done

echo "---"
echo "✅ All replacements complete."