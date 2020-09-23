let page = null;

const getPage = () => {
    return page;
}

const setPage = (pageParam) => {
    page = pageParam;
}

exports.getPage = getPage;
exports.setPage = setPage;