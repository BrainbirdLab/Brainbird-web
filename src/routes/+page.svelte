<script lang="ts">

    const members: {[key: string]: {[key: string]: string}} = {
        'Sakib HS': {
            'role': 'Co-Founder & CEO',
            'image': 'sakib',
        },
        'Fuad Hasan': {
            'role': 'Founder & CTO',
            'image': 'fuad',
        },
        'Muntasir H. Bokhari': {
            'role': 'Co-Founder & CMO',
            'image': 'bokhari',
        }
    }
</script>

<div class="content">
    <header>
        <div class="title">BrainBird.org</div>
    </header>

    <main>
        <img src="/images/logo.png" alt="Logo">
        <section>
            We are a team of passionate developers, designers, and marketers who are dedicated to making the world a better place through technology.
        </section>
    </main>

    <div class="aboutMembers">
        <h2>Our Team</h2>
        <ul>
            {#each Object.keys(members) as member}
                <li class="member">
                    <img src={`/images/${members[member].image}.png`} alt={member} width="200" height="200">
                    <h3>{member}</h3>
                    <p>{members[member].role}</p>
                </li>
            {/each}
        </ul>
    </div>

    <footer>
        <p>© {new Date().getFullYear()} BrainBird.org</p>
    </footer>
</div>

<style lang="scss">

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
}

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 1rem;

    img{
        width: 200px;
    }
}

.aboutMembers{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 1rem;
    background: black;
    color: white;
    width: 100%;

    h2{
        font-size: 1.5rem;
        font-weight: 800;
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .member{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        font-size: 1rem;

        img{
            width: 70px;
            height: 70px;
            background: #d4f2ff;
            border-radius: 50%;
        }
        p{
            font-size: 0.8rem;
        }
    }
}

footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 0.7rem;
}

</style>