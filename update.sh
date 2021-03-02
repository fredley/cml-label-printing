BRANCH=`git branch --show`

if [ "$BRANCH" = "printing.countrymarketlabels.co.uk" ]; then
    echo "Uploading to printing.countrymarketlabels.co.uk."
    BUCKET=printing.countrymarketlabels.co.uk
    DISTRO=E3GWEN3QOD2YV6
else
    if [ "$BRANCH" = "master" ]; then
        echo "Uploading to cmllabelprinting.co.uk."
        BUCKET=www.cmllabelprinting.co.uk
        DISTRO=E1RSN4E02UBRYG
    else
        echo "Not a deploy branch"
        exit 1
    fi
fi

echo "Uploading..."

aws s3 cp index.html s3://$BUCKET
aws s3 cp labels.js s3://$BUCKET
aws s3 cp script.js s3://$BUCKET
aws s3 cp sheets.js s3://$BUCKET
aws s3 cp style.css s3://$BUCKET

echo "Updating ACLs..."

aws s3api put-object-acl --bucket $BUCKET --acl public-read --key index.html
aws s3api put-object-acl --bucket $BUCKET --acl public-read --key labels.js
aws s3api put-object-acl --bucket $BUCKET --acl public-read --key script.js
aws s3api put-object-acl --bucket $BUCKET --acl public-read --key sheets.js
aws s3api put-object-acl --bucket $BUCKET --acl public-read --key style.css

echo "Invalidating caches..."
aws cloudfront create-invalidation --distribution-id $DISTRO --paths "/*"
