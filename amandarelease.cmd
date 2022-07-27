git checkout main
git pull
git add -A
git commit -m "change from amanda"
git push
git checkout release
git pull
git merge main
git push
git checkout main
