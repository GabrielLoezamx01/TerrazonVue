<template>
    <h1>ESTAS EN APP.VUE</h1>
    <nav>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </nav>
    <main>
        <router-view />
    </main>
</template>
