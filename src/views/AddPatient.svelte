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

  const addPatient = () => {
    ipcRenderer.send("add-patient", doc);
  };
</script>

<div class="flex flex-col items-center h-full">
  <form class="w-full max-w-lg">

    <!-- name with initials -->
    <div class="flex flex-wrap mb-6 -mx-3">
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-first-name">
          Initials
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="A. B. C. D."
          bind:value={doc.initials} />
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
          type="text"
          placeholder="1997"
          bind:value={doc.birth_year} />
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
          type="text"
          placeholder="16"
          bind:value={doc.birth_date} />
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
          type="text"
          placeholder="07XXXXXXXX"
          bind:value={doc.personal_tp} />
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
          type="text"
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
          type="text"
          placeholder="07XXXXXXXX"
          bind:value={doc.moh_tp} />
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
          type="text"
          placeholder="07XXXXXXXX"
          bind:value={doc.phi_tp} />
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
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Other person's name
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Jane Doe"
          bind:value={doc.lw_name} />
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-first-name">
          Other person's address
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="01/A, Main St., Colombo"
          bind:value={doc.lw_address} />
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Contact number 1
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="07XXXXXXXX"
          bind:value={doc.lw_tp1} />
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Contact number 2
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="07XXXXXXXX"
          bind:value={doc.lw_tp2} />
      </div>
    </div>

    <!-- Educational qualifications -->
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
      </div>
      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700
          uppercase"
          for="grid-city">
          Occupation
        </label>
        <input
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Occupation"
          bind:value={doc.job} />
      </div>
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
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Subsidies received"
          bind:value={doc.gov_facilities} />
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
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Brief explaination"
          bind:value={doc.disease} />
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
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Hospital admission"
          bind:value={doc.hospital_admission} />
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
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200
          border border-gray-200 rounded appearance-none focus:outline-none
          focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Extra notes"
          bind:value={doc.remarks} />
      </div>
    </div>

    <!-- Submit button -->
    <div class="md:flex md:items-center">
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
  </form>
</div>
