<script>
  export let stats;
  export let section;

  const getSectioName = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        return "Watching";
      case 2:
        return "Completed";
      case 3:
        return "On Hold";
      case 4:
        return "Dropped";
      case 6:
        return "Plan to Watch";
      case 7:
        return "All Anime";
    }
  };
</script>

<div class={`rectangulo ${getSectioName(section).toLocaleLowerCase().replaceAll(' ', '-')}`}>
  <h3 class="title">{getSectioName(section)}</h3>
  <div class={`hours-container`}>
    <h4>Missing time:</h4>
    <h4>{stats[getSectioName(section)].missingHours} hours</h4>
    <h4>{stats[getSectioName(section)].missingMinutes} minutes</h4>
    <h4>{stats[getSectioName(section)].missingMinutes / 20} chapters</h4>
  </div>
</div>

<style>

  .rectangulo {
    width: 100%;
    height: 100px;
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  .rectangulo.watching:hover {
    box-shadow: #2db039 2px 2px 2px 0px
  }

  .rectangulo.on-hold:hover {
    box-shadow: #f1c83e 2px 2px 2px 0px
  }

  .rectangulo.dropped:hover {
    box-shadow: #a12f31 2px 2px 2px 0px
  }

  .rectangulo.plan-to-watch:hover {
    box-shadow: #c3c3c3 2px 2px 2px 0px
  }

  .title {
    text-transform: uppercase;
    font-size: 2rem;
    position: absolute;
    left: 30px;
    top: -23px;
  }

  /* 1 row 3 columns */
  .hours-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    width: 100%;
  }

  h4 {
    margin: 0;
    font-size: 1.5rem;
  }

  .watching {
    color:  #2db039;
  }

  .dropped {
    color: #a12f31;
  }
  
  .plan-to-watch {
    color: #c3c3c3;
  }
  
  .on-hold {
    color: #f1c83e;
  }

  h3 {
    text-transform: uppercase;
		font-size: 1.5rem;
    margin: 0;
	}
</style>