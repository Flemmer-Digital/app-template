echo "Let's pre commit the shit out of this repo..."
cd .git/hooks
touch pre-commit
chmod +x pre-commit
echo 'cd app && yarn lint-staged && yarn run tsc --noEmit && yarn test' > pre-commit
echo "You can thank me later  😆"