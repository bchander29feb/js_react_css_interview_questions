1. Clone Project (One Time)
git clone https://github.com/vishal-dcode/100-React-Projects.git
cd 100-React-Projects

2. Always Start From Latest Main
git checkout main
git pull origin main

3. Create Feature Branch (Only Once)
git checkout -b feature/login-ui

4. Work, Add & Commit
git status
git add .
git commit -m "Create login UI"

5. Push Feature Branch
git push origin feature/login-ui

6. If Main Gets Updated (Sync Your Branch)

git checkout main
git pull origin main
git checkout feature/login-ui
git merge main

7. Create Pull Request (PR)

PR from feature/login-ui → main
Code Review
Approval
Merge to main


CI / CD (Interview-Ready)
CI – Continuous Integration
Automatically checks code when developer pushes changes.
Code Push → Build → Test → Feedback


CD – Continuous Delivery / Deployment
Deploys code after CI success.
Types:
Continuous Delivery: Manual approval required
Continuous Deployment: Auto deploy to production
Test Pass → Build → Deploy → Monitor