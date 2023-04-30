<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Features</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-center">
            <i :class="feature.icon" class="text-5xl mb-4"></i>
            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-check-circle',
          title: 'Easy To Use',
          description: 'Our intuitive interface makes it easy to manage your tasks and stay organized.',
        },
        {
          icon: 'fas fa-history',
          title: 'History Tracking',
          description: 'Keep track of your progress with detailed task history and analytics.',
        },
        {
          icon: 'fas fa-cogs',
          title: 'Customizable',
          description: 'Personalize your experience with custom themes and settings.',
        },
        {
          icon: 'fas fa-mobile-alt',
          title: 'Mobile Friendly',
          description: 'Access your tasks from any device with our responsive design.',
        },
        {
          icon: 'fas fa-users',
          title: 'Collaboration',
          description: 'Work together with your team and share tasks effortlessly.',
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Secure',
          description: 'Your data is protected with industry-leading security measures.',
        },
      ],
    }
  },
}
</script>