if [[ $1 = "rebase" ]]; then
    echo "\nCompiling assets post $1..."

    npm run build

    echo "\nAdding compiled CSS and JS to the last commit..."
    cd ../../../..
    git add -u
    git commit --amend --no-edit
fi
