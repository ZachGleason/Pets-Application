import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react";
import Select from "react-select";
import { BsPlusLg } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Axios from "axios";
import { Modal } from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Schedule = (props) => {
	const nav = useNavigate();

	//   useEffect(() => {
	//   if (Object.keys(props.user).length === 0) {
	//     nav("/");
	//   }
	// }, []);

	const [scheduling, setScheduling] = useState([]);
	const [re, setRe] = useState(0);
	const [isDaily, setIsDaily] = useState(0);
	const [isCompleted, setIsCompleted] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/tasks/pet/" + props.pet_id)
			.then((res) => setScheduling(res.data.data))
			.catch((err) => console.log(err));
	}, [re]);

	const checkDaily = (idx) => {
		if (scheduling[idx].isDaily === 0) {
			return false;
		}
		return true;
	};

	const checkComplete = (idx) => {
		if (scheduling[idx].isCompleted === 0) {
			return false;
		}
		return true;
	};

	const handleDaily = (e, id, idx) => {
		e.preventDefault();
		if (scheduling[idx].isDaily === 0) {
			setIsDaily(1);
		} else {
			setIsDaily(0);
		}
		axios
			.put("http://localhost:8000/api/tasks/" + id, {
				isDaily,
				isCompleted: scheduling[idx].isCompleted,
				name: scheduling[idx].name,
				time: scheduling[idx].time,
				frequency: scheduling[idx].frequency,
				pets_id: props.pet_id,
			})
			.then((res) => {
				setRe(re + 1);
			})
			.catch((err) => console.log(err));
	};

	const handleComplete = (e, id, idx) => {
		e.preventDefault();
		if (scheduling[idx].isCompleted === 0) {
			setIsCompleted(1);
		} else {
			setIsCompleted(0);
		}
		axios
			.put("http://localhost:8000/api/tasks/" + id, {
				isDaily: scheduling[idx].isDaily,
				isCompleted,
				name: scheduling[idx].name,
				time: scheduling[idx].time,
				frequency: scheduling[idx].frequency,
				pets_id: props.pet_id,
			})
			.then((res) => {
				setRe(re + 1);
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (e, id) => {
        e.preventDefault()
        if (window.confirm("Are you sure you want to delete this task?")) {
            axios
			.delete("http://localhost:8000/api/tasks/" + id)
			.then((res) => {
				setRe(re + 1);
			})
			.catch((err) => console.log(err));
        }
	
	};

	return (
		<div>
			<div className="container">
				<div>
					<h1
						style={{
							fontFamily: "Abel",
							marginLeft: 10,
							marginBottom: -10,
							marginTop: 40,
							display: "inline-block",
						}}
					>
						Schedule
					</h1>
					<BsPlusLg
						style={{ display: "inline-block", marginLeft: 40, marginTop: -10, cursor : "pointer"}}
						onClick={() => nav(`/scheduling/${props.pet_id}`)}
					/>
					<hr style={{ width: "95%", marginLeft: 10 }} />
				</div>
				<div style={{ height: 480, overflow: "scroll" }}>
					{/* Map out all of the scheduled boxes for the selected pet */}
					{scheduling.map((info, idx) => {
						return (
							<div
								style={{
									width: "95%",
									height: 110,
									border: "1px solid black",
									borderRadius: 15,
									marginLeft: 10,
									marginTop: 8,
									alignItems: "center",
									justifyContent: "center",
								}}
								key="idx"
							>
								<div
									style={{
										marginLeft: 15,
										display: "inline-block",
										maxWidth: "100%",
									}}
								>
									<div>
										<p style={{ display: "inline-block", marginLeft: 5 }}>
											<b>Task:</b> {info.name}
										</p>
										<p style={{ display: "inline-block", marginLeft: 20 }}>
											<b>Time:</b> {info.time}
										</p>
										<p style={{ display: "inline-block", marginLeft: 20 }}>
											<b>Frequency:</b> {info.frequency}
										</p>
									</div>
									<div style={{ display: "inline-block" }}>
										<label style={{ alignContent: "center", marginLeft: 20 }}>
											Daily
											<input
												type="checkbox"
												className="checkmark"
												checked={checkDaily(idx)}
												style={{ marginLeft: 10 }}
												onChange={(e) => handleDaily(e, info.id, idx)}
											></input>
										</label>
										<label
											style={{
												alignContent: "center",
												marginLeft: 20,
												textAlign: "center",
											}}
										>
											Completed
											<input
												type="checkbox"
												className="checkmark"
												checked={checkComplete(idx)}
												style={{ marginLeft: 10 }}
												onChange={(e) => handleComplete(e, info.id, idx)}
											></input>
										</label>
									</div>
									<Button sx={{ color: "black", fontSize: 25, marginTop: -3 }}>
										<FaEdit />
									</Button>
								</div>
								<div>
									<Button
										variant="text"
										color="error"
										size="small"
										sx={{ marginLeft: 2 }}
                                        onClick={(e) => handleDelete(e, info.id)}
									>
										Delete
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Schedule;
