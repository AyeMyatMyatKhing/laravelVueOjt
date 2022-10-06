<template>
    <div class="container">
        <div class="title my-3">
            <h4>Post List</h4>
        </div>
        <div class="search-item my-4">
            <div class="form-inline">
                <input type="text" name="search_data" class="form-control" placeholder="Search" v-model="searchData">
                <button class="btn btn-outline-primary mx-4" type="submit" @click="filterData">Search</button>
            </div>
            <div class="postList-btn">
                <router-link class="btn btn-primary" to="/post/create">Add</router-link>
                <button class="btn btn-primary mx-3">Upload</button>
                <button class="btn btn-primary">Download</button>
            </div>
        </div>
        <div class="post-list my-5">
            <table class="table table-bordered">
                <thead class="table-primary text-center">
                    <tr>
                        <th scope="col">Post Title</th>
                        <th scope="col">Post Description</th>
                        <th scope="col">Posted User</th>
                        <th scope="col">Posted Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody v-if="posts.data.length > 0">
                    <tr v-for="post in posts.data" :key="post.id">
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                        <td>{{ post.user.name }}</td>
                        <td>{{ moment(post.created_at).format('MM/DD/YYYY') }}</td>
                        <td class="text-center">
                            <button class="btn btn-primary">Edit</button>
                            <button class="btn btn-danger my-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr class="text-center">
                        <td colspan="5">There is no data</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="../../services/post/postList.js"></script>

<!-- <style src="../../assets/css/style.css"></style> -->