echo "Let's pre commit the shit out of this repo..."
cd .git/hooks
touch pre-commit
chmod +x pre-commit
echo 'cd app && yarn lint-staged' >> pre-commit
echo "You can thank me later  😆"