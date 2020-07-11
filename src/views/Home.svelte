<script>
  import MediumCard from "../components/cards/Medium.svelte";

  const dummyData = {
    initials: "S. S",
    lname: "Smith",
    treatment_his: "Clogapine",
    last_clinic_visit: new Date(),
    next_clinic_date: new Date(),
    remarks: "Him gud boi"
  };
</script>

<div class="flex flex-col p-4">
  <h1 class="text-2xl">Today's clinic patients</h1>

  <div class="flex flex-row flex-wrap mt-4">
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
  </div>
</div>

<div class="flex flex-col p-4">
  <h1 class="text-2xl">Scheduled home visits</h1>

  <div class="flex flex-row flex-wrap mt-4">
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
    <MediumCard data={dummyData} />
  </div>
</div>
