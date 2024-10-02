import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import RetreatBanner from "../img/RetreatRocks.png";
import DynamicForm from "../components/DynamicForm";

const RetreatMemo = () => {
  // Chairs
  const [chairName, setChairName] = useState("");
  const [chairPhone, setChairPhone] = useState("");
  const [coChairName, setCoChairName] = useState("");
  const [coChairPhone, setCoChairPhone] = useState("");
  const [shadowName, setShadowName] = useState("");
  const [shadowPhone, setShadowPhone] = useState("");
  // Friday Dinner
  const [fridayCrewChief, setfridayCrewChief] = useState("");
  const [fridayCrew1, setfridayCrew1] = useState("");
  const [fridayCrew2, setfridayCrew2] = useState("");
  const [fridayCrew3, setfridayCrew3] = useState("");
  const [IntroChair, setIntroChair] = useState("");
  const [IntroChair1, setIntroChair1] = useState("");
  const [IntroChair2, setIntroChair2] = useState("");
  // breakfast
  const [BreakfastCrewChief, setBreakfastCrewChief] = useState("");
  const [BreakfastCrew1, setBreakfastCrew1] = useState("");
  const [BreakfastCrew2, setBreakfastCrew2] = useState("");
  const [BreakfastCrew3, setBreakfastCrew3] = useState("");
  const [MorningAAchair, setMorningAAchair] = useState("");
  const [MorningAAspeaker, setMorningAAspeaker] = useState("");
  // lunch
  const [lunchCrewChief, setlunchCrewChief] = useState("");
  const [lunchPrep, setlunchPrep] = useState("");
  const [lunchPrep1, setlunchPrep1] = useState("");
  const [lunchPrep2, setlunchPrep2] = useState("");

  // Alanon Meeting
  const [AlanonChair, setAlanonChair] = useState("");
  const [AlanonSpeaker, setAlanonSpeaker] = useState("");

  // Dinner
  const [SatDinnerCrewChief, setSatDinnerCrewChief] = useState("");
  const [SatDinnerCrew, setSatDinnerCrew] = useState("");
  const [SatDinnerCrew1, setSatDinnerCrew1] = useState("");
  const [SatDinnerCrew2, setSatDinnerCrew2] = useState("");

  // Saturday Meeting
  const [SatAAmeetingChair, setSatAAmeetingChair] = useState("");
  const [SatAAmettingSpeaker, setSatAAmettingSpeaker] = useState("");

  // Sunday
  const [SunCrewChief, setSunCrewChief] = useState("");
  const [SunCrew, setSunCrew] = useState("");
  const [SunCrew1, setSunCrew1] = useState("");
  const [SunCrew2, setSunCrew2] = useState("");

  // Bed Assognment
  const [bedAssignment1, setbedAssignment1] = useState("");
  const [bedAssignment2, setbedAssignment2] = useState("");
  const [bedAssignment3, setbedAssignment3] = useState("");
  const [bedAssignment4, setbedAssignment4] = useState("");
  const [bedAssignment5, setbedAssignment5] = useState("");
  const [bedAssignment6, setbedAssignment6] = useState("");
  const [bedAssignment7, setbedAssignment7] = useState("");
  const [bedAssignment8, setbedAssignment8] = useState("");
  const [bedAssignment9, setbedAssignment9] = useState("");
  const [bedAssignment10, setbedAssignment10] = useState("");
  const [bedAssignment11, setbedAssignment11] = useState("");
  const [bedAssignment12, setbedAssignment12] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Lake of Dreams 2024 Fall Recovery Retreat", 10, 10);

    // Chairs
    doc.setFontSize(12);
    doc.text(`Chair: ${chairName} (${chairPhone})`, 10, 20);
    doc.text(`Co-Chair: ${coChairName} (${coChairPhone})`, 10, 30);
    doc.text(`Shadow: ${shadowName} (${shadowPhone})`, 10, 40);

    // friday Crew
    doc.text(
      `friday Crew Chief: ${fridayCrewChief} (${fridayCrewChief})`,
      10,
      50
    );
    doc.text(`friday Crew: ${fridayCrew1} (${fridayCrew1})`, 10, 60);
    doc.text(`friday Crew: ${fridayCrew2} (${fridayCrew2})`, 10, 70);
    doc.text(`friday Crew: ${fridayCrew3} (${fridayCrew3})`, 10, 80);
    doc.text(`Intro Chairperson: ${IntroChair} (${IntroChair})`, 10, 90);
    doc.text(`Intro Chair 2: ${IntroChair1} (${IntroChair1})`, 10, 100);
    doc.text(`Intro Chair 3: ${IntroChair2} (${IntroChair2})`, 10, 110);

    // Saturday Breakfast
    doc.text(
      `Breakfast Crew Chief: ${BreakfastCrewChief} (${BreakfastCrewChief})`,
      10,
      120
    );
    doc.text(`Breakfast Crew: ${BreakfastCrew1} (${BreakfastCrew1})`, 10, 130);
    doc.text(`Breakfast Crew: ${BreakfastCrew2} (${BreakfastCrew2})`, 10, 140);
    doc.text(`Breakfast Crew: ${BreakfastCrew3} (${BreakfastCrew3})`, 10, 150);

    // Saturday Morning Meeting
    doc.text(
      `Morning Meeting 8:30 Chair: ${MorningAAchair} (${MorningAAchair})`,
      10,
      160
    );
    doc.text(
      `Morning Meeting 8:30 Speaker: ${MorningAAspeaker} (${MorningAAspeaker})`,
      10,
      170
    );

    // Lunch
    doc.text(
      `Lunch Crew Chief: ${lunchCrewChief} (${lunchCrewChief})`,
      10,
      180
    );
    doc.text(`Lunch Crew: ${lunchPrep} (${lunchPrep})`, 10, 190);
    doc.text(`Lunch Crew: ${lunchPrep1} (${lunchPrep1})`, 10, 200);
    doc.text(`Lunch Crew: ${lunchPrep2} (${lunchPrep2})`, 10, 210);

    // Alanon Meeting
    doc.text(`Alanon Chair: ${AlanonChair} (${AlanonChair})`, 10, 220);
    doc.text(`Alanon Speaker: ${AlanonSpeaker} (${AlanonSpeaker})`, 10, 230);

    // SatDinner
    doc.text(
      `Dinner Crew Chief: ${SatDinnerCrewChief} (${SatDinnerCrewChief})`,
      10,
      240
    );
    doc.text(`Dinner Crew: ${SatDinnerCrew} (${SatDinnerCrew})`, 10, 250);
    doc.text(`Dinner Crew: ${SatDinnerCrew1} (${SatDinnerCrew1})`, 10, 260);
    doc.text(`Dinner Crew: ${SatDinnerCrew2} (${SatDinnerCrew2})`, 10, 270);

    // Saturday Meeting
    doc.text(
      `Saturday Chair: ${SatAAmeetingChair} (${SatAAmeetingChair})`,
      10,
      260
    );
    doc.text(
      `Saturday Speaker: ${SatAAmettingSpeaker} (${SatAAmettingSpeaker})`,
      10,
      270
    );

    // Sunday
    doc.text(`Sunday Crew Chief: ${SunCrewChief} (${SunCrewChief})`, 10, 280);
    doc.text(`Sunday Crew: ${SunCrew} (${SunCrew})`, 10, 290);
    doc.text(`Sunday Crew: ${SunCrew1} (${SunCrew1})`, 10, 300);
    doc.text(`Sunday Crew: ${SunCrew2} (${SunCrew2})`, 10, 310);

    // Bed Assignment
    doc.text(`Bed Assignment: ${bedAssignment1} (${bedAssignment1})`, 10, 320);
    doc.text(`Bed Assignment: ${bedAssignment2} (${bedAssignment2})`, 10, 330);
    doc.text(`Bed Assignment: ${bedAssignment3} (${bedAssignment3})`, 10, 340);
    doc.text(`Bed Assignment: ${bedAssignment4} (${bedAssignment4})`, 10, 350);
    doc.text(`Bed Assignment: ${bedAssignment5} (${bedAssignment5})`, 10, 360);
    doc.text(`Bed Assignment: ${bedAssignment6} (${bedAssignment6})`, 10, 370);
    doc.text(`Bed Assignment: ${bedAssignment7} (${bedAssignment7})`, 10, 380);
    doc.text(`Bed Assignment: ${bedAssignment8} (${bedAssignment8})`, 10, 390);
    doc.text(`Bed Assignment: ${bedAssignment9} (${bedAssignment9})`, 10, 400);
    doc.text(
      `Bed Assignment: ${bedAssignment10} (${bedAssignment10})`,
      10,
      410
    );
    doc.text(
      `Bed Assignment: ${bedAssignment11} (${bedAssignment11})`,
      10,
      420
    );
    doc.text(
      `Bed Assignment: ${bedAssignment12} (${bedAssignment12})`,
      10,
      430
    );

    // Save the PDF
    doc.save("retreat_memo.pdf");
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <img
        src={RetreatBanner}
        alt="Retreat Banner"
        className="w-full h-auto mb-6 rounded-lg"
      />
      <button
        onClick={generatePDF}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Generate PDF
      </button>
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
            id="fridayCrewChief"
            type="text"
            value={fridayCrewChief}
            onChange={handleChange(setfridayCrewChief)}
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </h3>
        <p className="mb-2 font-semibold">Prep, Cleanup and Beverages:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <input
              id="fridayCrew1"
              type="text"
              value={fridayCrew1}
              onChange={handleChange(setfridayCrew1)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <input
              id="fridayCrew2"
              type="text"
              value={fridayCrew2}
              onChange={handleChange(setfridayCrew2)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <input
              id="fridayCrew3"
              type="text"
              value={fridayCrew3}
              onChange={handleChange(setfridayCrew3)}
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
            id="IntroChair"
            type="text"
            value={IntroChair}
            onChange={handleChange(setIntroChair)}
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="IntroChair1"
            type="text"
            value={IntroChair1}
            onChange={handleChange(setIntroChair1)}
            className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="IntroChair2"
            type="text"
            value={IntroChair2}
            onChange={handleChange(setIntroChair2)}
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
              id="BreakfastCrewChief"
              type="text"
              value={BreakfastCrewChief}
              onChange={handleChange(setBreakfastCrewChief)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id="BreakfastCrew1"
              type="text"
              value={BreakfastCrew1}
              onChange={handleChange(setBreakfastCrew1)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="BreakfastCrew2"
              type="text"
              value={BreakfastCrew2}
              onChange={handleChange(setBreakfastCrew2)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="BreakfastCrew3"
              type="text"
              value={BreakfastCrew3}
              onChange={handleChange(setBreakfastCrew3)}
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
              id="MorningAAchair"
              type="text"
              value={MorningAAchair}
              onChange={handleChange(setMorningAAchair)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>AA Speaker:</strong>
            <input
              id="MorningAAspeaker"
              type="text"
              value={MorningAAspeaker}
              onChange={handleChange(setMorningAAspeaker)}
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
              id="lunchCrewChief"
              type="text"
              value={lunchCrewChief}
              onChange={handleChange(setlunchCrewChief)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id="lunchPrep"
              type="text"
              value={lunchPrep}
              onChange={handleChange(setlunchPrep)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="lunchPrep1"
              type="text"
              value={lunchPrep1}
              onChange={handleChange(setlunchPrep1)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="lunchPrep2"
              type="text"
              value={lunchPrep2}
              onChange={handleChange(setlunchPrep2)}
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
              id="AlanonChair"
              type="text"
              value={AlanonChair}
              onChange={handleChange(setAlanonChair)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Al-Anon Speaker:</strong>
            <input
              id="AlanonSpeaker"
              type="text"
              value={AlanonSpeaker}
              onChange={handleChange(setAlanonSpeaker)}
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
              id="SatDinnerCrewChief"
              type="text"
              value={SatDinnerCrewChief}
              onChange={handleChange(setSatDinnerCrewChief)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>{" "}
            <input
              id="SatDinnerCrew"
              type="text"
              value={SatDinnerCrew}
              onChange={handleChange(setSatDinnerCrew)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="SatDinnerCrew1"
              type="text"
              value={SatDinnerCrew1}
              onChange={handleChange(setSatDinnerCrew1)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="SatDinnerCrew2"
              type="text"
              value={SatDinnerCrew2}
              onChange={handleChange(setSatDinnerCrew2)}
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
              id="SatAAmettingChair"
              type="text"
              value={SatAAmeetingChair}
              onChange={handleChange(setSatAAmeetingChair)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>AA Speaker:</strong>
            <input
              id="SatAAmettingSpeaker"
              type="text"
              value={SatAAmettingSpeaker}
              onChange={handleChange(setSatAAmettingSpeaker)}
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
              id="SunCrewChief"
              type="text"
              value={SunCrewChief}
              onChange={handleChange(setSunCrewChief)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </p>
          <p>
            <strong>Prep, Cleanup, Beverages:</strong>
            <input
              id="SunCrew"
              type="text"
              value={SunCrew}
              onChange={handleChange(setSunCrew)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="SunCrew1"
              type="text"
              value={SunCrew1}
              onChange={handleChange(setSunCrew1)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id="SunCrew2"
              type="text"
              value={SunCrew2}
              onChange={handleChange(setSunCrew2)}
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

      {/* <!-- LODI Retreat Bed Assignments --> */}
      <div class="container mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">LODI Retreat Bed Assignments</h2>{" "}
        <div class="grid grid-cols-2 gap-4">
          {" "}
          <div class="mb-4">
            {" "}
            <label
              for="Not Available"
              class="block text-gray-700 font-semibold mb-1"
            >
              {" "}
              Master (Paul Melnuk)
            </label>{" "}
            <input
              id="bedAssignment1"
              type="text"
              placeholder="Not Available"
              value={bedAssignment1}
              onChange={handleChange(setbedAssignment1)}
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
              value={bedAssignment2}
              onChange={handleChange(setbedAssignment2)}
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
              value={bedAssignment3}
              onChange={handleChange(setbedAssignment3)}
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
              value={bedAssignment4}
              onChange={handleChange(setbedAssignment4)}
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
              value={bedAssignment5}
              onChange={handleChange(setbedAssignment5)}
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
              value={bedAssignment6}
              onChange={handleChange(setbedAssignment6)}
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
              value={bedAssignment7}
              onChange={handleChange(setbedAssignment7)}
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
              value={bedAssignment8}
              onChange={handleChange(setbedAssignment8)}
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
              value={bedAssignment9}
              onChange={handleChange(setbedAssignment9)}
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
              value={bedAssignment10}
              onChange={handleChange(setbedAssignment10)}
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
              value={bedAssignment11}
              onChange={handleChange(setbedAssignment11)}
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
              value={bedAssignment12}
              onChange={handleChange(setbedAssignment12)}
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
