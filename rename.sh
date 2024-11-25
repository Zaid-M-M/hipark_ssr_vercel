for file in *.cjs; do
    mv -- "$file" "${file%.cjs}.js"
done
