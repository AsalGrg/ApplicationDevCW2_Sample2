import { Button, Select, Text } from "@mantine/core";
import { MonthPicker, MonthPickerInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { get_analysis_data } from "../../services/getAnalysisData";
import EachBlogCard from "../../components/global/EachBlogCard";

const AdminHome = () => {
  const [selectedDate, setSelectedDate] = useState("All Time");
  const [selectedDateCalendar, setselectedDateCalendar] = useState("");

  const [analysisDetails, setanalysisDetails] = useState({
    TotalPosts: 0,
    TotalUpvotes: 0,
    TotalDownvotes: 0,
    TotalComments: 0,
    TopBlogs: [],
  });
  useEffect(() => {
    async function getAllAnalyis() {
      const analysisData = {
        SelectedDateOption: selectedDate,
        SelectedCalendarDate: selectedDateCalendar,
      };
      const res = await get_analysis_data(analysisData);

      if (res.ok) {
        const data = await res.json();
        setanalysisDetails(data);
      }
    }

    getAllAnalyis();
  }, [selectedDate, selectedDateCalendar]);

  console.log(selectedDateCalendar);
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Text size="20px" style={{ fontWeight: 700, marginBottom: "20px" }}>
        Dashboard
      </Text>

      <div style={{ width: "25%", marginTop: "20px" }}>
        {selectedDate !== "Select Date" ? (
          <Select
            label="Pick a date"
            size="sm"
            placeholder="Pick a date"
            value={selectedDate}
            data={["All Time", "Select Date"]}
            onChange={(value) => {
              setSelectedDate(value);
            }}
          />
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="date"
              placeholder="Pick date"
              value={selectedDateCalendar}
              onChange={(date) => {
                setselectedDateCalendar(date.target.value);
              }}
            />
            <Button size="xs" onClick={() => setSelectedDate("All Time")}>
              <MdCancel />
            </Button>
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <div
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 600 }}>Posts</Text>
          <Text style={{ fontWeight: 700 }}>{analysisDetails.TotalPosts}</Text>
        </div>

        <div
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 600 }}>Upvotes</Text>
          <Text style={{ fontWeight: 700 }}>
            {analysisDetails.TotalUpvotes}
          </Text>
        </div>

        <div
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 600 }}>Downvotes</Text>
          <Text style={{ fontWeight: 700 }}>
            {analysisDetails.TotalDownvotes}
          </Text>
        </div>

        <div
          style={{
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 600 }}>Comments</Text>
          <Text style={{ fontWeight: 700 }}>
            {analysisDetails.TotalComments}
          </Text>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Text style={{ fontWeight: 700, fontSize: "18px" }}>Top blogs</Text>

        <div style={{ marginTop: "10px" }} className="row">
          {analysisDetails.TopBlogs.map((each) => (
            <div className="col-5">
              <EachBlogCard key={each.id} blog={each} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
