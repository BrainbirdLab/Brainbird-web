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
        <img class="logo" src="/images/logo.png" alt="Logo">
        <h1>BrainBird.org</h1>
        <div class="intro">
            BrainBird build software and solutions for the web, mobile, and desktop. We are a team of developers, designers, and product managers who are passionate about building quality software.
        </div>
    </header>

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
    .logo{
        height: 80px;
        //blend the white background with the image
        mix-blend-mode: multiply;
    }

    .content{
        font-family: Now;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: #e4f3ff;
    }

    .intro{
        max-width: 600px;
        text-align: center;
        margin-top: 20px;
    }

    .aboutMembers{
        margin-top: 40px;
        h2{
            text-align: center;
        }
        ul{
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .member{
                margin: 20px;
                text-align: center;
                img{
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    object-fit: cover;
                    outline: 3px solid white;
                    background: #e4f3ff;
                }
            }
        }
    }


    footer{
        text-align: center;
        font-size: 0.7rem;
        padding: 5px;
        background-color: black;
        color: white;
        width: 100%;
        bottom: 0;
    }

</style>