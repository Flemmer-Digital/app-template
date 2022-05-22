echo "Let's pre commit the shit out of this repo..."
cd .git/hooks
rm pre-commit
touch pre-commit
chmod +x pre-commit
echo 'cd app' >> pre-commit
echo 'yarn lint-staged && yarn preCommit' >> pre-commit
echo "You can thank me later  😆"