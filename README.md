## Fuel Finder

Summary: Website that allows a user to make and login to account and find the best gas station with the lowest prices and allows to favorite different stations and leave a rating or comment on a station.

### For Group
Step 1:
run git status

Step 2:
git add .

Step 3:
git commit -m "add message for the commit or why you are commiting code"

Step 4:
git push origin your branch name

ex: git push origin Garrett
that pushes your changes to your branch on github

to run the server on your computer type in your terminal in the project: npm start

then just go to local host and you will see the page

### To push to master

Step 1:
After pushing to your own branch, git checkout master

Step 2:
git merge {your branch name}

Step 3:
git push origin master

Step 4:
Make sure to go back to your own branch when you're done - git checkout {your branch name}

### To pull from master

Step 1:
Be in your branch - git checkout {your branch name}

Step 2:
git pull origin master

Step 3:
git status (terminal should say you are ahead of your branch, make sure you are on YOUR branch)

Step 4:
You may have to run git pull, or handle some merge conflicts.

Step 5:
git push
