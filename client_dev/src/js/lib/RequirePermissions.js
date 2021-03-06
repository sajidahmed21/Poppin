export default function RequirePermissions(permissions) {
    let native = cordova.plugins.permissions || false;

    return new Promise((resolve, reject) => {
        // Browser/iOS compat.
        if (!native || (['browser', 'ios'].includes(device.platform.toLowerCase()))) {
            resolve();
            return;
        }

        let require = (permission) => {
            if (typeof permission === 'undefined') {
                resolve();
                return;
            }

            native.hasPermission(native[permission], (status) => {
                if (status.hasPermission) {
                    require(permissions.shift());
                } else {
                    native.requestPermission(native[permission], (status) => {
                        if (status.hasPermission) {
                            require(permissions.shift());
                        } else {
                            reject(native[permission]);
                        }
                    }, () => {
                        reject(native[permission]);
                    });
                }
            }, () => { reject(native[permission]); });
        };
        require(permissions.shift());
    });
};
