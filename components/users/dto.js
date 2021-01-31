const single = (resource, authUser) => ({
    id: resource._id,
    username: resource.username,
});
const multiple = (resource, authUser) =>
    resource.map((resource) => single(resource, authUser));
module.exports = {
    single,
    multiple,
};
