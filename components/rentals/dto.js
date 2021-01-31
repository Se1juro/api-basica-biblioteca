const single = (resource, authUser) => ({
    id: resource._id,
    book: resource.idBook,
    user:resource.userName
});
const multiple = (resource, authUser) =>
    resource.map((resource) => single(resource, authUser));
module.exports = {
    single,
    multiple,
};
