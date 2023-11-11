<template>
 <div>
  <header>
    <nav class="nav">
      <NuxtLink to="/about">about page</NuxtLink>
      <NuxtLink to="/posts">posts page</NuxtLink>
      <NuxtLink to="/">home page</NuxtLink>
    </nav>
  </header>

  <main>
    <div>
  		<VApp>
  			<VMain>
  				<slot />
  			</VMain>
  		</VApp>
  	</div>
  </main>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

nav {
  display: flex;
  flex-direction: column;
}
</style>