import React from "react";
import DashboardNav from "../Components/DashboardNav";
import AnimalInput from "../Components/AnimalInput";

const Animals = (props) => {
	return (
		<div className="black">
			<DashboardNav />
			<div
				style={{ height: 380, width: "80%", margin: "auto", borderRadius: 10 }}
			>
				<div style={{ height: 580, margin: "auto", borderRadius: 10 }}>
					<AnimalInput
						style={{ maxWidth: 200, margin: "auto" }}
						user={props.user}
						setUser={props.setUser}
					/>
				</div>
			</div>
		</div>
	);
};

export default Animals;
