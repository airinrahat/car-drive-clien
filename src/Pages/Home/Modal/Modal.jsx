import { FaPlusCircle } from "react-icons/fa";
import Select from "react-dropdown-select";

const Modal = () => {
  // const options = [
  //   { label: "mamun", value: 1 },
  //   { label: "riya", value: 2 },
  //   { label: "promi", value: 3 },
  //   { label: "tani", value: 4 },
  // ];
  return (
    <div className="hero max-w-screen-xl mx-auto py-5    my-5">
      <button
        className="btn capitalize rounded-xl text-[#4d69fa] hover:bg-[#4d69fa] hover:text-white"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <FaPlusCircle />
        Add Vehicle
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-full max-w-5xl">
          <h3 className="font-bold text-lg mb-4">Add Vehicle</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form action="">
            {/* Seller and Body Style */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Seller </span>

                <div className="w-full">
                  {" "}
                  <Select placeholder="Search Seller"></Select>
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Body Style</span>
                <div className="w-full outline-blue-500">
                  {" "}
                  <Select
                    className="outline-blue-500 "
                    placeholder="Search Body Style"
                  ></Select>
                </div>
              </div>
            </div>

            {/* vin and title code */}
            <div className="flex gap-5">
              <div className="flex w-full ">
                <span className="w-24">Vin </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Vin"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Title Code</span>
                <div className="w-full">
                  {" "}
                  <Select placeholder="Search Title Code"></Select>
                </div>
              </div>
            </div>
            {/* Start Bid Amount and Primary Damage */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Start Bid Amount </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Start Bid Amount"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Primary Damage</span>
                <div className="w-full">
                  {" "}
                  <Select placeholder="Search Primary Damage"></Select>
                </div>
              </div>
            </div>
            {/* Year and Secondary Damage */}
            <div className="flex gap-5">
              <div className="flex w-full ">
                <span className="w-24">Year </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Year"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Secondary Damage</span>
                <div className="w-full">
                  {" "}
                  <Select placeholder="Search Secondary Damage"></Select>
                </div>
              </div>
            </div>

            {/* Make and Vehicle Type */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Make</span>

                <div className="w-full">
                  {" "}
                  <Select
                    placeholder="Search Make
"
                  ></Select>
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Vehicle Type</span>
                <div className="w-full outline-blue-500">
                  {" "}
                  <Select
                    className="outline-blue-500 "
                    placeholder="Search Vehicle Type"
                  ></Select>
                </div>
              </div>
            </div>
            {/* Model and Transmission */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24 mt-3">Model</span>

                <div className="w-full">
                  {" "}
                  <select className="select w-full h-2 " disabled>
                    <option>Search Model </option>
                  </select>
                </div>
              </div>

              <div className="flex w-full ">
                <span className="w-24 mr-2 ">Transmission </span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Transmission
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Odometer and Drive   */}
            <div className="flex gap-5">
              <div className="flex w-full ">
                <span className="w-24">Odometer </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Odometer"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24 mr-2 ">Drive Train </span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Drive Train
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Retail Value and Fuel Type code */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Retail Value </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Retail Value"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24 mr-2 ">Fuel Type</span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Fuel Type
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
            </div>
            {/* color and Mileage Type code */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Color </span>

                <div className="w-full">
                  {" "}
                  <input
                    type="text"
                    placeholder="Color"
                    className="input input-bordered w-full h-8 "
                  />
                </div>
              </div>

              <div className="flex w-full ">
                <span className="w-24 mr-2 ">Mileage Type</span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Mileage Type
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Engine Type and Keys */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24">Engine Type </span>

                <div className="w-full">
                  {" "}
                  <Select placeholder="Engine Type"></Select>
                </div>
              </div>
              <div className="flex w-full ">
                <span className="w-24">Keys </span>
                <div className="mr-5">
                  <input type="checkbox" name="yes" id="" /> Yes
                </div>
                <div className="mL-8">
                  <input type="checkbox" name="no" id="" />
                  No
                </div>
              </div>
            </div>
            {/* Cylinder and Note code */}
            <div className="flex gap-5 my-6">
              <div className="flex w-full ">
                <span className="w-24 mr-2 ">Cylinder</span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Cylinder
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>

              <div className="flex w-full ">
                <span className="w-24">Note </span>

                <div className="w-full">
                  {" "}
                  <textarea
                    className="border border-[#f8f9fa] rounded-lg  bg-[#f8f9fa] placeholder:pl-2"
                    name=""
                    id=""
                    placeholder="Note"
                    cols="50"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex gap-5 my-6">
              <div className="flex w-1/2 ">
                <span className="w-24 mr-2 ">Highlight</span>

                <div className="w-full">
                  {" "}
                  <select className="select select-bordered  select-sm w-full ">
                    <option disabled selected>
                      Select Highlight
                    </option>
                    <option> Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="divider divider-neutral"></div>
            <h3 className="text-xl">Vehicle Photos</h3>
            <div className="join">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />{" "}
              <button className="btn  rounded-r-full">Upload</button>
            </div>
          </form>{" "}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
