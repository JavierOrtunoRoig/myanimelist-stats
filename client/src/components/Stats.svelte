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

<div class={`stats ${getSectioName(section).toLocaleLowerCase().replaceAll(' ', '-')}`}>
  <h3>{getSectioName(section)}</h3>
    <div class={"stat-container"}>
      <div class="stat">
        <h2 class="stat-title">Missing minutes</h2>
        <h3 class="stat-data">{stats[getSectioName(section)].missingMinutes}</h3>
      </div>
      <div class="stat">
        <h2 class="stat-title">Missing hours</h2>
        <h3 class="stat-data">{stats[getSectioName(section)].missingHours}</h3>
      </div>
    </div>
</div>

<style>

  .watching {
    color: #2db039;
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

  .stat-container {
    display: flex;
    gap: 25px;
  }

  .stats {
		display: flex;
		gap: 25px;
		padding: 1rem;
    flex-direction: column;
    text-align: center;
	}

	.stat {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 25px;
	}

	.stat-title {
		font-size: 2rem;
		margin: 0;
		animation: lineUp 2s ease-out 0s 1;
	}
	
	.stat-data {
		font-size: 2rem;
		margin: 0;
		animation: lineUp 2s ease-out 0s 1;
	}

  @keyframes lineUp {
		0% {
			opacity: 0;
			transform: translateY(80%);
		}
		20% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			transform: translateY(0%);
		}
		100% {
			opacity: 1;
			transform: translateY(0%);
		}
	}
</style>