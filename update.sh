if [ ! -z "${NEXTCLOUD_VERSION}" ]; then
    mkdir -p _update
    cd _update
    if [ ! -f "nextcloud-${NEXTCLOUD_VERSION}.tar.bz2" ]; then
        echo "Downloading Nextcloud ${NEXTCLOUD_VERSION} archive"
        wget --quiet https://download.nextcloud.com/server/releases/nextcloud-${NEXTCLOUD_VERSION}.tar.bz2
    fi
    echo "Unpacking Nextcloud ${NEXTCLOUD_VERSION} archive"
    tar xjf nextcloud-${NEXTCLOUD_VERSION}.tar.bz2
    rm -rf ../src
    mv nextcloud/ ../src/
    rm -rf ../src/config
    chmod +x ../src/occ
else
    echo "Required environment variable NEXTCLOUD_VERSION has not been set. Update cannot proceed." 1>&2
    exit 1
fi
# we potentially want an update mechanism for preview-generator
