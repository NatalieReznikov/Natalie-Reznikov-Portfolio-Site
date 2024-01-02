# abort on errors

# build
npm run build

# navigate into the build output directory
cp -r build/* dist
cd dist

# if you are deploying to a custom domain
'nataliereznikov.com' | save CNAME -f
'' | save .nojekyll -f

mkdir .github/
mkdir .github/workflows
cp ../workflow.yml .github/workflows/

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com:/NatalieReznikov/Natalie-Reznikov-Portfolio-Site.git master:master

cd -

