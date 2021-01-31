const single = (resource, authUser) => ({
    id: resource._id,
    name: resource.name,
    description: resource.description,
    author: resource.author,
});
const multiple = (resource, authUser) =>
    resource.map((resource) => single(resource, authUser));
module.exports = {
    single,
    multiple,
};
