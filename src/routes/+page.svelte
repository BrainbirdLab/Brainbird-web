<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
  
    let companyName: string = "BrainbirdLab";
    let services: string[] = [
      "Software Optimization",
      "Networking Solutions",
      "Systems Development",
      "Embedded Applications",
      "Code Readability Enhancement",
      "Advanced Bug Fixing"
    ];
  
    let visible = $state(false);
  
    onMount(() => {
      visible = true;
    });
  </script>
  
  <svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <title>{companyName} - Next-Gen Software Solutions</title>
  </svelte:head>
  
  <main>
    <nav>
      <div class="logo">{companyName}</div>
      <div class="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  
    <header>
      {#if visible}
        <h1 in:fly={{ y: -20, duration: 800 }}>Next-Gen Software Solutions</h1>
        <p in:fade={{ duration: 1000 }}>Optimizing the future of technology</p>
      {/if}
    </header>
  
    <section id="services" class="services">
      <h2>Our Expertise</h2>
      <div class="service-grid">
        {#each services as service, i}
          <div class="service-item" in:fly="{{ y: 20, duration: 400, delay: i * 100 }}">
            <svg class="service-icon" viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M12 16V8M8 12h8" stroke="currentColor" stroke-width="2"/>
            </svg>
            <h3>{service}</h3>
          </div>
        {/each}
      </div>
    </section>
  
    <section id="about" class="about">
      <h2>About Us</h2>
      <p>
        At {companyName}, we're at the forefront of software innovation. Our team of elite
        developers and engineers specialize in creating high-performance, scalable solutions
        that push the boundaries of what's possible in tech. From optimizing complex systems
        to developing cutting-edge embedded applications, we transform challenges into
        opportunities for technological advancement.
      </p>
    </section>
  
    <section id="contact" class="contact">
      <h2>Get in Touch</h2>
      <p>Ready to elevate your software performance? Contact us to start the conversation.</p>
      <a href="mailto:fuad.cs22@gmail.com" class="cta-button">Email Us</a>
    </section>
  
    <footer>
      <p>&copy; {new Date().getFullYear()} {companyName}. Pioneering Software Solutions.</p>
    </footer>
  </main>
  
  <style lang="scss">
    $primary-color: #00a8ff;
    $secondary-color: #192a56;
    $background-color: #f5f6fa;
    $text-color: #2f3640;
    $accent-color: #ffa502;
  
    :global(body) {
      background-color: $background-color;
      margin: 0;
      padding: 0;
      color: $text-color;
    }
  
    main {
      font-family: 'Inter', sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
  
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      
      .logo {
        font-size: 1.5em;
        font-weight: 700;
        color: $primary-color;
      }
  
      .nav-links {
        a {
          margin-left: 20px;
          text-decoration: none;
          color: $secondary-color;
          font-weight: 600;
          transition: color 0.3s ease;
  
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  
    header {
      text-align: center;
      padding: 100px 0;
      background: linear-gradient(135deg, $secondary-color, $primary-color);
      color: white;
      border-radius: 10px;
      margin-bottom: 60px;
  
      h1 {
        font-size: 3.5em;
        font-weight: 700;
        margin-bottom: 20px;
      }
  
      p {
        font-size: 1.5em;
        font-weight: 300;
      }
    }
  
    section {
      margin-bottom: 80px;
  
      h2 {
        font-size: 2.5em;
        color: $secondary-color;
        margin-bottom: 30px;
        text-align: center;
      }
    }
  
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
  
      .service-item {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
  
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
  
        h3 {
          font-size: 1.2em;
          margin-top: 15px;
          color: $secondary-color;
        }
  
        .service-icon {
          color: $primary-color;
        }
      }
    }
  
    .about, .contact {
      background-color: white;
      padding: 50px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  
      p {
        font-size: 1.1em;
        line-height: 1.6;
      }
    }
  
    .contact {
      text-align: center;
  
      .cta-button {
        display: inline-block;
        background-color: $accent-color;
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        margin-top: 20px;
        transition: background-color 0.3s ease;
  
        &:hover {
          filter: brightness(95%);
        }
      }
    }
  
    footer {
      text-align: center;
      padding: 20px 0;
      color: $secondary-color;
    }
  
    @media (max-width: 768px) {
      header {
        h1 {
          font-size: 2.5em;
        }
        p {
          font-size: 1.2em;
        }
      }
  
      .service-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>