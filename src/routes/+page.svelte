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
        <div class="title">
            <img src="/images/logo.png" alt="Logo">
        </div>
    </header>

    <section class="main">
        The best optimized solutions for web and mobile applications.

    </section>

    <section class="aboutMembers">
        <h2>Meet the Team</h2>
        <ul>
            {#each Object.keys(members) as member}
                <li class="member">
                    <img src={`/images/${members[member].image}.png`} alt={member} width="200" height="200">
                    <h3>{member}</h3>
                    <p>{members[member].role}</p>
                </li>
            {/each}
        </ul>
    </section>

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
    height: 100svh;
    //proximity
    scroll-snap-type: y proximity;
    background-image: url('./images/pattern.png');
    overflow-y: scroll;
}

header{
    display: flex;
    position: fixed;
    flex-direction: row;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    font-size: 1.2rem;
    width: 100%;
    z-index: 10;

    img{
        width: 60px;
    }
}

.main{
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 20%;
    font-size: 4rem;
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    padding: 20px;
    //scroll snap
    scroll-snap-align: start;
}

.aboutMembers{

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20%;
    font-size: 1rem;
    //background: rgb(132, 44, 255);
    //color: white;

    width: 100%;

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
    padding: 2px;
    width: 100%;
    background: black;
    color: white;
    font-size: 0.7rem;
}

</style>