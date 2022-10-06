<template>
    <div class="container post-create">
        <div class="card">
            <div class="card-header">
                <h4>Post Create Form</h4>
            </div>
            <div class="card-body">
                <div class="form-input">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" v-model="title">
                </div>
                <div class="form-input">
                    <label for="description">Description</label>
                    <textarea name="description" class="form-control" v-model="description"></textarea>
                </div>
                <div class="form-input">
                    <button class="btn btn-primary">Confirm</button>
                    <router-link to="/post" class="btn btn-secondary">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <style src="../../assets/css/style.css"></style> -->

<script src="../../services/post/create.js"></script>