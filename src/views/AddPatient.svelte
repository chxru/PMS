<script>
  const { ipcRenderer } = require("electron");

  import DatePicker from "smelte/src/components/DatePicker";
  let selected;

  let doc = {
    initials: "",
    lname: "",
    address: "",
    grama_niladhari: "",
    divisional_sector: "",
    gender: "",
    marital: "",
    birth_year: "",
    birth_month: "",
    birth_date: "",
    personal_tp: "",
    home_tp: "",
    moh_tp: "",
    phi_tp: "",
    living_with: "",
    lw_name: "",
    lw_address: "",
    lw_tp1: "",
    lw_tp2: "",
    edu_status: { "1-5": false, "6-OL": false, AL: false },
    has_job: "",
    job: "",
    gov_facilities: "",
    disease: "",
    treatment_his: { Clogapine: false, Depo: false, ECT: false },
    last_clinic_visit: "",
    informed_over_phone: "",
    home_visit: "",
    next_clinic_date: "",
    hospital_admission: "",
    remarks: ""
  };

  let requied_field = {
    initials: "",
    lname: "",
    address: "",
    grama_niladhari: "",
    divisional_sector: "",
    gender: "",
    marital: "",
    birth_year: "",
    birth_month: "",
    birth_date: "",
    moh_tp: "",
    phi_tp: "",
    living_with: "",
    has_job: "",
    gov_facilities: "",
    disease: "",
    last_clinic_visit: "",
    informed_over_phone: "",
    home_visit: "",
    next_clinic_date: "",
    hospital_admission: ""
  };

  let eMessage = {
    initials: "",
    lname: "",
    address: "",
    grama_niladhari: "",
    divisional_sector: "",
    gender: "",
    marital: "",
    birth_year: "",
    birth_month: "",
    birth_date: "",
    personal_tp: "",
    home_tp: "",
    moh_tp: "",
    phi_tp: "",
    living_with: "",
    lw_name: "",
    lw_address: "",
    lw_tp1: "",
    lw_tp2: "",
    edu_status: { "1-5": false, "6-OL": false, AL: false },
    has_job: "",
    job: "",
    gov_facilities: "",
    disease: "",
    treatment_his: { Clogapine: false, Depo: false, ECT: false },
    last_clinic_visit: "",
    informed_over_phone: "",
    home_visit: "",
    next_clinic_date: "",
    hospital_admission: "",
    remarks: ""
  };

  let valid = false;
  let SubmitError = false;
  const addPatient = () => {
    valid = true;

    let field_arry = Object.keys(requied_field);

    // validation Loop

    // living with
    if (doc.living_with != "Alone" && doc.living_with != "") {
      requied_field.lw_name = "";
      requied_field.lw_address = "";
      if (doc.lw_tp1 != 0 || doc.lw_tp2 != 0) {
        eMessage.lw_tp1 = " ";
        SubmitError = false;
      } else {
        eMessage.lw_tp1 = "*Add at least one number";
        SubmitError = true;
      }
    } else {
      eMessage.lw_tp1 = "";
      SubmitError = false;
    }

    // has job
    if (doc.has_job == "Yes") {
      requied_field.job = "";
    }

    //Personal Phone Number Check
    if (doc.personal_tp != 0 || doc.home_tp != 0) {
      eMessage.personal_tp = " ";
      SubmitError = false;
    } else {
      eMessage.personal_tp = "*Add at least one number";
      SubmitError = true;
    }

    // treatment history check
    if (
      doc.treatment_his.Clogapine == true ||
      doc.treatment_his.Depo == true ||
      doc.treatment_his.ECT == true
    ) {
      eMessage.treatment_his = "";
      SubmitError = true;
    } else {
      eMessage.treatment_his = "*This Field is Required";
      SubmitError = false;
    }

    for (const property in doc) {
      if (field_arry.indexOf(property) != -1) {
        if (doc[property] == "") {
          eMessage[property] = "*This Field is Required";
          SubmitError = true;
        } else {
          eMessage[property] = " ";
          SubmitError = false;
        }
      }
    }
    if (SubmitError == false) {
      ipcRenderer.send("add-patient", doc);
    }
  };
</script>

<div class="flex flex-col items-center h-full">
  <form class="w-full max-w-lg">

    <!-- name with initials -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <lable
          class="block mb-1 text-xs font-bold tracking-wide text-gray-700
          uppercase">
          Initials
        </lable>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="A. B. C. D."
          bind:value={doc.initials} />

        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.initials}
        </p>

      </div>
      <div class="w-full px-3 md:w-1/2">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-last-name">
          Last Name
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Samarakoon"
          bind:value={doc.lname} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.lname}
        </p>
      </div>
    </div>

    <!-- address -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-first-name">
          Address
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="01/A, Main Street, Colombo"
          bind:value={doc.address} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.address}
        </p>
      </div>

    </div>

    <!-- provincial sector data -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Grama Niladhari sector
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Grama Niladhari Sector"
          bind:value={doc.grama_niladhari} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.grama_niladhari}
        </p>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Divisional seceratory sector
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Divisional seceratory sector"
          bind:value={doc.divisional_sector} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.divisional_sector}
        </p>
      </div>
    </div>

    <!-- sex & marital status -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Sex
        </label>
        <div class="relative">
          <select
            class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            bind:value={doc.gender}>
            <option />
            <option>Male</option>
            <option>Female</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-700 pointer-events-none">
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.gender}
        </p>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Marital status
        </label>
        <div class="relative">
          <select
            class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            bind:value={doc.marital}>
            <option />
            <option>Married</option>
            <option>Unmarried</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-700 pointer-events-none">
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.marital}
        </p>
      </div>
    </div>

    <!-- Birthday -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Birth year
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="1997"
          bind:value={doc.birth_year} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.birth_year}
        </p>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-state">
          Month
        </label>
        <div class="relative">
          <select
            class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            bind:value={doc.birth_month}>
            <option />
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-700 pointer-events-none">
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.birth_month}
        </p>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-zip">
          Date
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="16"
          bind:value={doc.birth_date} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.birth_date}
        </p>
      </div>
    </div>

    <!-- Personal contact numbers -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Personal
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.personal_tp} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.personal_tp}
        </p>
      </div>

      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Home
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="011XXXXXXX"
          bind:value={doc.home_tp} />
      </div>
    </div>

    <!-- PHI MOH contact numbers -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          MOH Contact Number
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.moh_tp} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.moh_tp}
        </p>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          PHI contact number
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.phi_tp} />
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.phi_tp}
        </p>
      </div>
    </div>

    <!-- Living with -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Living with
        </label>
        <div class="relative">
          <select
            class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            bind:value={doc.living_with}>
            <option />
            <option>Alone</option>
            <option>With spouse</option>
            <option>With sibilings</option>
            <option>With childern</option>
            <option>With relations</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-700 pointer-events-none">
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p class="text-red-500 text-xs front-bold tracking-wide italic">
          {eMessage.living_with}
        </p>
      </div>
      {#if doc.living_with == 'With spouse' || doc.living_with == 'With sibilings' || doc.living_with == 'With childern' || doc.living_with == 'With relations'}
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-city">
            Other person's name
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Jane Doe"
            bind:value={doc.lw_name} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.lw_name}
          </p>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Other person's address
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="01/A, Main St., Colombo"
            bind:value={doc.lw_address} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.lw_address}
          </p>
        </div>
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-city">
            Contact number 1
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="07XXXXXXXX"
            bind:value={doc.lw_tp1} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.lw_tp1}
          </p>
        </div>
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-city">
            Contact number 2
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="07XXXXXXXX"
            bind:value={doc.lw_tp2} />
        </div>
      {:else}
        <p />
      {/if}
    </div>

    <!-- Educational qualifications -->
    <div>
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Educational qualifications
          </label>
          <div class="flex flex-row justify-center">
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.edu_status['1-5']} />
              <span class="text-sm">1-5</span>
            </div>
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.edu_status['6-OL']} />
              <span class="text-sm">5 - O/L</span>
            </div>
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.edu_status['AL']} />
              <span class="text-sm">A/L</span>
            </div>
          </div>
        </div>
      </div>

      <!-- occupation -->
      <div class="flex flex-wrap mb-2 -mx-3">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-city">
            Has occupation
          </label>
          <div class="relative">
            <select
              class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700
              bg-gray-200 border border-gray-200 rounded appearance-none
              focus:outline-none focus:bg-white focus:border-gray-500"
              bind:value={doc.has_job}>
              <option />
              <option>Yes</option>
              <option>No</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2
              text-gray-700 pointer-events-none">
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                  6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.has_job}
          </p>
        </div>
        {#if doc.has_job == 'Yes'}
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">

            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700
              uppercase"
              for="grid-city">
              Occupation
            </label>
            <input
              class="block w-full px-4 py-3 leading-tight text-gray-700
              bg-gray-200 border border-gray-200 rounded appearance-none
              focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Occupation"
              bind:value={doc.job} />
            <p class="text-red-500 text-xs front-bold tracking-wide italic">
              {eMessage.job}
            </p>
          </div>
        {:else}
          <p />
        {/if}
      </div>

      <!-- Goverment facilities -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Sahanadhara received from goverment
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Subsidies received"
            bind:value={doc.gov_facilities} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.gov_facilities}
          </p>
        </div>
      </div>

      <!-- Disease data -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Disease
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Brief explaination"
            bind:value={doc.disease} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.disease}
          </p>
        </div>
      </div>

      <!-- Treatment history -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Treatment history
          </label>
          <div class="flex flex-row justify-center">
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.treatment_his['Clogapine']} />
              <span class="text-sm">Clogapine</span>
            </div>
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.edu_status['Depo']} />
              <span class="text-sm">Depo injection</span>
            </div>
            <div class="w-1/3">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                bind:checked={doc.edu_status['ECT']} />
              <span class="text-sm">ECT</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Last clinic visit -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Last clinic visit
          </label>
          <DatePicker bind:value={doc.last_clinic_visit} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.last_clinic_visit}
          </p>
        </div>
      </div>

      <!-- Date of informed over phone -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Informed over phone
          </label>
          <DatePicker bind:value={doc.informed_over_phone} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.informed_over_phone}
          </p>
        </div>
      </div>

      <!-- Home visit -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Home visit
          </label>
          <DatePicker bind:value={doc.home_visit} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.home_visit}
          </p>
        </div>
      </div>

      <!-- Hospital admission -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Hospital admission
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Hospital admission"
            bind:value={doc.hospital_admission} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.hospital_admission}
          </p>
        </div>
      </div>

      <!-- Next clinic date -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Next clinic date
          </label>
          <DatePicker bind:value={doc.next_clinic_date} />
          <p class="text-red-500 text-xs front-bold tracking-wide italic">
            {eMessage.next_clinic_date}
          </p>
        </div>
      </div>

      <!-- Remarks -->
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700
            uppercase"
            for="grid-first-name">
            Remarks
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700
            bg-gray-200 border border-gray-200 rounded appearance-none
            focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Extra notes"
            bind:value={doc.remarks} />
        </div>
      </div>
      {#if SubmitError == true}
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded
          relative"
          role="alert">
          <strong class="font-bold">Sorry!</strong>
          <span class="block sm:inline">
            Something wrong with submiting data. Please check and try again
          </span>
        </div>
      {:else}
        <div
          class="bg-green-200 border border-green-500 text-green-800 px-4 py-3
          rounded relative"
          role="alert">
          <strong class="font-bold">Success!</strong>
          <span class="block sm:inline">
            New patient has been registered successfully.
          </span>
        </div>
      {/if}
      <!-- Submit button -->
      <div class="md:flex md:items-center py-3">
        <div class="md:w-1/3" />
        <div class="md:w-2/3">
          <button
            class="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow
            hover:bg-purple-400 focus:shadow-outline focus:outline-none"
            type="button"
            on:click={addPatient}>
            Add patient
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
