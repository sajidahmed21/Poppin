export default function RequirePermissions(permissions) {
    let native = cordova.plugins.permissions;

    return new Promise((resolve, reject) => {
        let require = (permission) => {
            if (typeof permission === 'undefined') {
                resolve();
                return;
            }

            native.hasPermission(permission, (status) => {
                if (status.hasPermission) {
                    require(permissions.shift());
                } else {
                    native.requestPermission(permission, (status) => {
                        if (status.hasPermission) {
                            require(permissions.shift());
                        } else {
                            reject(permission);
                        }
                    }, () => {
                        reject(permission);
                    });
                }
            }, () => { reject(permission); });
        };
        require(permissions.shift());
    });
};
