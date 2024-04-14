// ключь авторизации
export const pathsPublic: { [k: string]: string } = {
    home: "/",
    productPage: "/product/:idOrSlug", // либо uuid сделать
};
// ключь авторизации
export const pathsPrivate: { [k: string]: string } = {
    accountSetting: "/account-setting",
};

export const paths: { [k: string]: string } = Object.assign(
    {},
    pathsPublic,
    pathsPrivate
);

export const checkPathMatch = (
    pathname: string,
    paths: { [k: string]: string }
) => {
    let isMatch = false;

    // получаем объекты paths по ключу а b c...
    const allPaths = Object.keys(paths).map((k) => paths[k]);
    // по pathname передаю в checkPathMatch, берем текущую локацию убераю начальный "/"
    const pathFirstSection = pathname.split("/")[1];

    allPaths.forEach((p) => {
        if (p.slice(1) === pathFirstSection) isMatch = true;
    });
    return isMatch;
};
