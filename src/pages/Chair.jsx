import React from "react";
import RetreatRocks from "../img/RetreatRocks.png";

const Chair = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Image at the top */}
      <img
        src={RetreatRocks}
        alt="Retreat Banner"
        className="w-2/3 h-auto mb-6 rounded-lg" // Sets width to 75% of the parent
      />

      <h1 className="text-3xl font-bold mb-6">Retreat Schedule</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Friday</h2>
        <p className="mb-2">
          <span className="font-bold">7:30PM</span> – Introductions Meeting: Led
          by Kent Boaz, Douglas Hilbert, Ty Hyde
        </p>
        <p className="ml-8 mb-2">(Brownies / Ice Cream after Meeting)</p>
        <p className="ml-8">Dinner crew: TBD</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saturday</h2>
        <ScheduleItem
          time="6:00AM"
          event="Meditation – Optional (volunteer to lead)"
        />
        <ScheduleItem
          time="7:30AM"
          event="Breakfast"
          crew={{
            chief: "RYAN BENNETT",
            members: ["MIKE TAYLOR", "JOSEPH McCULLOCH", "NEAL SANDERS"],
          }}
        />
        <ScheduleItem
          time="8:30AM"
          event="Meeting"
          speakers={{
            chair: "TY HYDE",
            speaker: "RICHARD MONTAGUE",
          }}
        />
        {/* Add more Saturday schedule items */}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sunday</h2>
        <ScheduleItem
          time="6:00AM"
          event="Meditation – Optional (volunteer lead)"
        />
        <ScheduleItem
          time="7:30AM"
          event="Breakfast"
          crew={{
            chief: "RICHARD MONTAGUE",
            members: ["JOE JOYCE", "JACKSON LONG"],
          }}
        />
        <ScheduleItem
          time="8:30AM"
          event="Closing Meeting (chair, co-chair & shadow lead)"
        />
        <ScheduleItem time="10:00AM - 11:30AM" event="Cleanup: ALL" />
      </div>
    </div>
  );
};

const ScheduleItem = ({ time, event, crew, speakers }) => {
  return (
    <div className="mb-4">
      <p className="mb-1">
        <span className="font-bold">{time}</span> – {event}
      </p>
      {crew && (
        <div className="ml-8">
          <p>Crew Chief: {crew.chief}</p>
          <p>Prep, Cleanup and Beverages: {crew.members.join(", ")}</p>
        </div>
      )}
      {speakers && (
        <div className="ml-8">
          <p>
            {speakers.chair ? "AA Chair" : "Al-Anon Chair"}: {speakers.chair}
          </p>
          <p>
            {speakers.speaker ? "AA Speaker" : "Al-Anon Speaker"}:{" "}
            {speakers.speaker}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chair;
