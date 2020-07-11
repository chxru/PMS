<script>
  export let data;
</script>

<div
  class="flex flex-col h-56 w-84 bg-foreground shadow-md rounded-md px-4 py-2
  m-2 justify-between items ">
  <div>
    <h1 class="text-2xl">{data.lname}</h1>
    <h3>{data.initials}</h3>
  </div>
  <div>
    <p>Drugs: {data.treatment_his}</p>
    <p>
      Last visit: {data.last_clinic_visit.getMonth()} / {data.last_clinic_visit.getDate()}
    </p>
    <p>
      Scheduled next visit: {data.next_clinic_date.getMonth()} / {data.next_clinic_date.getDate()}
    </p>
    <p>Remarks: {data.remarks}</p>
  </div>
</div>
