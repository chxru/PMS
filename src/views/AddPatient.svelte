<script>
  const { ipcRenderer } = require("electron");
  import { newAlert } from "../store.js";
  import DatePicker from "smelte/src/components/DatePicker";

  let doc = {
    initials: "",
    lname: "",
    address: "",
    grama_niladhari: "",
    divisional_sector: "",
    gender: "Male",
    marital: "Married",
    birth_year: "",
    birth_month: "January",
    birth_date: "",
    personal_tp: "",
    home_tp: "",
    moh_tp: "",
    phi_tp: "",
    living_with: "Alone",
    lw_name: "",
    lw_address: "",
    lw_tp1: "",
    lw_tp2: "",
    edu_status: { "1-5": false, "6-OL": false, AL: false },
    has_job: "No",
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

  // adding patient to db after validation
  const addPatient = () => {
    if (doc.initials == "") return newAlert("Initials cannot be empty");
    if (doc.lname == "") return newAlert("Surname cannot be empty");
    if (doc.address == "") return newAlert("Address cannot be empty");

    ipcRenderer.send("add-patient", doc);
  };

  // form reset
  const resetForm = () => {
    document.getElementById("patient-add-form").reset();
  };

  // response msg from backend
  ipcRenderer.on("patient-add-res", (evt, args) => {
    if (args) {
      newAlert("Cannot write to database", args);
    } else {
      newAlert("Success", "New patient created", "info");
      resetForm();
    }
  });
</script>

<div class="flex flex-col items-center h-full">
  <form id="patient-add-form" class="w-full max-w-lg">

    <!-- name with initials -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Initials</span>
        <input
          class="form-input mt-1 block w-full"
          placeholder="C. H."
          bind:value={doc.initials}
          required />
      </div>
      <div class="w-full px-3 md:w-1/2">
        <span class="text-gray-700 font-bold ">Surename</span>
        <input
          class="form-input mt-1 block w-full"
          placeholder="Samarakoon"
          bind:value={doc.lname}
          required />
      </div>
    </div>

    <!-- address -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Address</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="01/A, Main Street, Colombo"
          bind:value={doc.address}
          required />
      </div>
    </div>

    <!-- provincial sector data -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Grama Niladhari Sector</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Grama Niladhari Sector"
          bind:value={doc.grama_niladhari} />
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">
          Divisional Seceratory Sector
        </span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Divisional seceratory sector"
          bind:value={doc.divisional_sector} />
      </div>
    </div>

    <!-- sex & marital status -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Gender</span>
        <select class="form-select mt-1 block w-full" bind:value={doc.gender}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Marital Status</span>
        <div class="relative">
          <select
            class="form-select mt-1 block w-full"
            bind:value={doc.marital}>
            <option>Married</option>
            <option>Unmarried</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Birthday -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <span class="text-gray-700 font-bold ">Birth year</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="1997"
          bind:value={doc.birth_year}
          min="1900"
          max="2100" />
      </div>
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <span class="text-gray-700 font-bold ">Month</span>
        <div class="relative">
          <select
            class="form-select mt-1 block w-full"
            bind:value={doc.birth_month}>
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
        </div>
      </div>
      <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
        <span class="text-gray-700 font-bold ">Date</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="16"
          bind:value={doc.birth_date}
          max="31"
          min="1" />
      </div>
    </div>

    <!-- Personal contact numbers -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Personal</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.personal_tp} />
      </div>

      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Home</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="011XXXXXXX"
          bind:value={doc.home_tp} />
      </div>
    </div>

    <!-- PHI MOH contact numbers -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">MOH Contact Number</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.moh_tp} />
      </div>

      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">PHI Contact Number</span>
        <input
          class=" form-input mt-1 block w-full"
          type="number"
          placeholder="07XXXXXXXX"
          bind:value={doc.phi_tp} />
      </div>
    </div>

    <!-- Living with -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Living with</span>
        <div class="relative">
          <select
            class="form-select mt-1 block w-full"
            bind:value={doc.living_with}>
            <option>Alone</option>
            <option>With spouse</option>
            <option>With sibilings</option>
            <option>With childern</option>
            <option>With relations</option>
          </select>
        </div>
      </div>
      {#if doc.living_with != 'Alone'}
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <span class="text-gray-700 font-bold ">Other person's name</span>
          <input
            class=" form-input mt-1 block w-full"
            type="text"
            bind:value={doc.lw_name} />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <span class="text-gray-700 font-bold ">Other person's address</span>
          <input
            class=" form-input mt-1 block w-full"
            type="text"
            placeholder="01/A, Main St., Colombo"
            bind:value={doc.lw_address} />
        </div>
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <span class="text-gray-700 font-bold ">Contact Number 1</span>
          <input
            class=" form-input mt-1 block w-full"
            type="number"
            placeholder="07XXXXXXXX"
            bind:value={doc.lw_tp1} />
        </div>
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <span class="text-gray-700 font-bold ">Contact Number 2</span>
          <input
            class=" form-input mt-1 block w-full"
            type="number"
            placeholder="07XXXXXXXX"
            bind:value={doc.lw_tp2} />
        </div>
      {/if}
    </div>

    <!-- Educational qualifications -->
    <div>
      <div class="flex flex-wrap mb-6 ">
        <div class="w-full px-3 mb-6 md:mb-0">
          <span class="text-gray-700 font-bold ">
            Educational Qualifications
          </span>
          <div class="flex flex-row justify-center">
            <div class="w-1/3">
              <input
                type="checkbox"
                class="form-checkbox"
                bind:checked={doc.edu_status['1-5']} />
              <span class="ml-2">1-5</span>
            </div>
            <div class="w-1/3">
              <input
                type="checkbox"
                class="form-checkbox"
                bind:checked={doc.edu_status['6-OL']} />
              <span class="ml-2">5 - O/L</span>
            </div>
            <div class="w-1/3">
              <input
                type="checkbox"
                class="form-checkbox"
                bind:checked={doc.edu_status['AL']} />
              <span class="ml-2">A/L</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- occupation -->
    <div class="flex flex-wrap mb-2 ">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <span class="text-gray-700 font-bold ">Has Occupation</span>
        <div class="relative">
          <select
            class="form-select mt-1 block w-full"
            bind:value={doc.has_job}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      {#if doc.has_job == 'Yes'}
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <span class="text-gray-700 font-bold ">Occupation</span>
          <input
            class=" form-input mt-1 block w-full"
            type="text"
            placeholder="Occupation"
            bind:value={doc.job} />
        </div>
      {/if}
    </div>

    <!-- Goverment facilities -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Subsidies by Goverment</span>
        <input
          class=" form-input mt-1 block w-full"
          type="text"
          placeholder="Subsidies received"
          bind:value={doc.gov_facilities} />
      </div>
    </div>

    <!-- Disease data -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Disease</span>
        <input
          class=" form-input mt-1 block w-full"
          type="text"
          placeholder="Brief explaination"
          bind:value={doc.disease} />
      </div>
    </div>

    <!-- Treatment history -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Treatment History</span>
        <div class="flex flex-row justify-center">
          <div class="w-1/3">
            <input
              type="checkbox"
              class="form-checkbox"
              bind:checked={doc.treatment_his['Clogapine']} />
            <span class="ml-2">Clogapine</span>
          </div>
          <div class="w-1/3">
            <input
              type="checkbox"
              class="form-checkbox"
              bind:checked={doc.treatment_his['Depo']} />
            <span class="ml-2">Depo injection</span>
          </div>
          <div class="w-1/3">
            <input
              type="checkbox"
              class="form-checkbox"
              bind:checked={doc.treatment_his['ECT']} />
            <span class="ml-2">ECT</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Last clinic visit -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Last Clinic Visit</span>
        <DatePicker bind:value={doc.last_clinic_visit} />
      </div>
    </div>

    <!-- Date of informed over phone -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Informed over phone</span>
        <DatePicker bind:value={doc.informed_over_phone} />
      </div>
    </div>

    <!-- Home visit -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Home Visit</span>
        <DatePicker bind:value={doc.home_visit} />
      </div>
    </div>

    <!-- Hospital admission -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Hospital admission</span>
        <input
          class=" form-input mt-1 block w-full"
          type="text"
          placeholder="Hospital admission"
          bind:value={doc.hospital_admission} />
      </div>
    </div>

    <!-- Next clinic date -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <span class="text-gray-700 font-bold ">Next Clinic Date</span>
        <DatePicker bind:value={doc.next_clinic_date} />
      </div>
    </div>

    <!-- Remarks -->
    <div class="flex flex-wrap mb-6 ">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-first-name">
          Remarks
        </label>
        <input
          class=" form-input mt-1 block w-full"
          type="text"
          placeholder="Extra notes"
          bind:value={doc.remarks} />
      </div>
    </div>

    <!-- Submit button -->
    <div class="flex justify-center py-3">
      <button
        class="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow
        hover:bg-purple-400 focus:shadow-outline focus:outline-none"
        on:click={addPatient}>
        Add Patient
      </button>
    </div>
  </form>
</div>
