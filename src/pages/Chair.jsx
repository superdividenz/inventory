import React, { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import RetreatBanner from "../img/RetreatRocks.png";

const RetreatMemo = () => {
  const [chairName, setChairName] = useState("");
  const [chairPhone, setChairPhone] = useState("");
  const [coChairName, setCoChairName] = useState("");
  const [coChairPhone, setCoChairPhone] = useState("");
  const [shadowName, setShadowName] = useState("");
  const [shadowPhone, setShadowPhone] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <img
        src={RetreatBanner}
        alt="Retreat Banner"
        className="w-full h-auto mb-6 rounded-lg"
      />
      <p className="mb-4 text-gray-700 leading-relaxed">
        This email/memo is being sent to everyone who is registered for the
        upcoming{" "}
        <strong className="font-bold">
          Lake of Dreams 2024 Fall Recovery Retreat
        </strong>
        (Sept 20th – Sept 22nd). The tentative meeting schedule, menu & service
        work assignments, and roster of attendees follow.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        <em className="italic">
          Menu adjustments might be made based upon what is on sale.
        </em>
        <br />
        If you do not like your service work assignment, you are free to trade
        with someone else; please let one of the chairs know.
        <br />
        If you do not like your room assignment, you are also free to trade with
        someone else; ditto.
        <br />
        <strong className="font-bold text-red-600">
          EVERY ATTENDEE WILL BE REQUIRED TO SIGN A WAIVER UPON ARRIVAL IN ORDER
          TO ATTEND.
        </strong>
      </p>

      <p className="mb-6 text-gray-700">
        Any questions or suggestions, please contact the retreat chair team.
        <br />
        Yours in service, yours in sobriety…
      </p>

      <h2 className="text-xl font-bold mb-4">RETREAT CHAIRS</h2>

      {/* Chair, Co-Chair, and Shadow Information in a grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Chair Information */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="chairName">
            Chair Name:
          </label>
          <input
            id="chairName"
            type="text"
            value={chairName}
            onChange={handleChange(setChairName)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="chairPhone">
            Chair Phone:
          </label>
          <input
            id="chairPhone"
            type="tel"
            value={chairPhone}
            onChange={handleChange(setChairPhone)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Co-Chair Information */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="coChairName">
            Co-Chair Name:
          </label>
          <input
            id="coChairName"
            type="text"
            value={coChairName}
            onChange={handleChange(setCoChairName)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="coChairPhone">
            Co-Chair Phone:
          </label>
          <input
            id="coChairPhone"
            type="tel"
            value={coChairPhone}
            onChange={handleChange(setCoChairPhone)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Shadow Information */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="shadowName">
            Shadow Name:
          </label>
          <input
            id="shadowName"
            type="text"
            value={shadowName}
            onChange={handleChange(setShadowName)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="shadowPhone">
            Shadow Phone:
          </label>
          <input
            id="shadowPhone"
            type="tel"
            value={shadowPhone}
            onChange={handleChange(setShadowPhone)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Directions */}
      <h2 className="text-xl font-bold mb-4">
        Lake of Dreams Address, Phone Number, and Driving Directions
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        <strong className="font-bold">Driving Directions:</strong> From I-270
        N/E, take Exit 31B to merge onto MO-367 N/Lewis and Clark Blvd. toward
        Alton IL. Continue onto US-67 N across Alton Bridge, for a total of 12.1
        miles. Left turn at stoplight at end of bridge onto Landmarks
        Blvd./US-67 N. Go 0.3 miles. Left turn at stoplight onto IL-100 N/W.
        Broadway/Great River Road, McAdams Parkway. Follow for 4.4 miles to
        stoplight intersection; right turn onto Clifton Terrace Road. Follow 0.8
        miles up hill. Turn left onto IL-3 N. Follow for 5.4 miles. Continue
        straight/bear to your right onto IL-109 N for 4.9 miles. Left turn onto
        Lodi Road. Follow for 1.4 miles. Lake of Dreams on Left. Park in circle
        in front or side parking lot. Parking space in circle just before front
        door reserved for Paul M.
      </p>

      {/* Items to Bring */}
      <h2 className="text-xl font-bold mb-4">
        Items to consider bringing with you:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          "CHILLY WEATHER" CLOTHING for 6 AM meditation, nighttime bonfires, and
          all meetings around the fire pit.
        </li>
        <li>Indoor footwear - loafers/crocs/slippers/sandals, etc.</li>
        <li>
          Winter jacket/sweatshirt/long sleeve shirts/winter weight sleepwear.
        </li>
        <li>Earplugs (everyone snores).</li>
        <li>Alarm clock.</li>
        <li>Camera.</li>
        <li>Flashlight.</li>
        <li>Toiletries.</li>
        <li>Towel/Washcloth.</li>
        <li>Pillow/sleeping bag/blanket.</li>
        <li>Bug spray.</li>
        <li>Sunglasses.</li>
        <li>Swim trunks for hot tub.</li>
      </ul>

      {/* Schedule, Menu, and Service Work Assignments */}
      <h2 className="text-xl font-bold mb-4">
        Schedule, Menu, and Service Work Assignments
      </h2>

      {/* Friday Schedule */}
      <h2 className="text-xl font-bold mb-4">Friday Schedule</h2>
      <div className="mb-6 text-gray-700">
        <p className="mb-4">
          <span className="font-semibold">Arrive anytime between:</span> 4:00 PM
          and 7:00 PM (Dinner at 6:00 PM)
        </p>
        <p className="font-semibold text-lg mb-2">6:00 PM – Dinner</p>
        <p className="mb-4">
          <span className="font-semibold">Enter meals, names, etc.</span>
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Crew Chief:
          <input
            id="crewChief"
            type="text"
            value=""
            onChange=""
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </h3>
        <p className="mb-2 font-semibold">Prep, Cleanup and Beverages:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <input
              id="chairName"
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <input
              id="chairName"
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <input
              id="chairName"
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
        </ul>
      </div>
      <div class="container mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Friday</h2>
        <p class="mb-4">
          <strong>7:30 PM – Introductions Meeting:</strong>{" "}
          <input
            id=""
            type="text"
            value=""
            onChange=""
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id=""
            type="text"
            value=""
            onChange=""
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id=""
            type="text"
            value=""
            onChange=""
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          (Brownies / Ice Cream after Meeting)
          <br />
          <strong>Dinner crew</strong>
        </p>

        <h2 class="text-xl font-bold mb-4">Saturday</h2>
        <p class="mb-4">
          <strong>Time not otherwise indicated is open/free time</strong>
        </p>

        <div class="mb-6">
          <p>
            <strong>6:00 AM</strong> – Meditation (Optional) – volunteer to lead
          </p>
          <p>
            <strong>7:30 AM</strong> – Breakfast
          </p>
          <p>
            <strong>Crew Chief:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>8:30 AM</strong> – Meeting
          </p>
          <p>
            <strong>AA Chair:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>AA Speaker:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>12:30 PM</strong> – Lunch
          </p>
          <p>
            <strong>Crew Chief:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>1:30 PM</strong> – Meeting
          </p>
          <p>
            <strong>Al-Anon Chair:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Al-Anon Speaker:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>
      </div>
      <div class="container mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        <div class="mb-6">
          <p>
            <strong>7:00 PM</strong> – Dinner
          </p>
          <p>
            <strong>Crew Chief:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>{" "}
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>8:00 PM</strong> – Meeting
          </p>
          <p>(Brownies / Ice Cream after Meeting)</p>
          <p>
            <strong>AA Chair:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>AA Speaker:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        {/* <!-- Sunday Section --> */}
        <h2 class="text-xl font-bold mb-4">Sunday</h2>
        <p class="mb-4">
          <strong>Depart after clean-up</strong>
        </p>

        <div class="mb-6">
          <p>
            <strong>6:00 AM</strong> – Meditation (Optional) – volunteer lead
          </p>
          <p>
            <strong>7:30 AM</strong> – Breakfast
          </p>
          <p>
            <strong>Crew Chief:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id=""
              type="text"
              value=""
              onChange=""
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>8:30 AM</strong> – Closing Meeting (Chair, Co-Chair & Shadow
            Lead)
          </p>
        </div>

        <div class="mb-6">
          <p>
            <strong>10:00 AM – 11:30 AM</strong> – Cleanup: ALL
          </p>
        </div>
      </div>
      <div class="container mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        {/* <!-- LODI Retreat Bed Assignments --> */}
        <h2 class="text-xl font-bold mb-4">
          LODI Retreat Bed Assignments
        </h2>{" "}
        <div class="grid grid-cols-2 gap-4">
          {" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment1"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Master (Paul Melnuk)
            </label>{" "}
            <input
              id="bedAssignment1"
              type="text"
              placeholder="Not Available"
              class="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment2"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              1st Fl Guest Left
            </label>{" "}
            <input
              id="bedAssignment2"
              type="text"
              placeholder="Retreat Co-Chairperson"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment3"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              1st Fl Guest Right
            </label>{" "}
            <input
              id="bedAssignment3"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment4"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Upstairs Left Single
            </label>{" "}
            <input
              id="bedAssignment4"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment5"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Upstairs Left Bunk Bed
            </label>{" "}
            <input
              id="bedAssignment5"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment6"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Upstairs Right Single
            </label>{" "}
            <input
              id="bedAssignment6"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment7"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Upstairs Right Bunk
            </label>{" "}
            <input
              id="bedAssignment7"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment8"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Downstairs Left Single 1
            </label>{" "}
            <input
              id="bedAssignment8"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment9"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Downstairs Left Single 2
            </label>{" "}
            <input
              id="bedAssignment9"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment10"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Downstairs Left Bunk
            </label>{" "}
            <input
              id="bedAssignment10"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment11"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Downstairs Right Single 1
            </label>{" "}
            <input
              id="bedAssignment11"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
          <div class="mb-4">
            {" "}
            <label
              for="bedAssignment12"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Downstairs Right Single 2
            </label>{" "}
            <input
              id="bedAssignment12"
              type="text"
              placeholder="Enter names comma seperated"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />{" "}
          </div>{" "}
        </div>
        {/* <!-- Roster Section --> */}
        <h2 className="text-xl font-bold mb-4">
          Roster - Lake of Dreams Fall 2024 Retreat
        </h2>
        <div class="container mx-auto p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Retreat Roster</h2>
          <DynamicForm />
        </div>
      </div>
    </div>
  );
};

export default RetreatMemo;
