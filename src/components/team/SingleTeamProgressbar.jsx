import ProgressBar from "@ramonak/react-progress-bar";
function SingleTeamProgressbar() {
	return (
		<>
			<div className="aximo-skillbar">
				<p className="aximo-skillbar-lable">Problem-Solving Skills:</p>

				<ProgressBar
					completed={95}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#5A17B8"
					height="10px"
				/>
			</div>
			<div className="aximo-skillbar">
				<p className="aximo-skillbar-lable">Networking Skills:</p>

				<ProgressBar
					completed={83}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#5A17B8"
					height="10px"
				/>
			</div>
			<div className="aximo-skillbar">
				<p className="aximo-skillbar-lable">Leadership Skills:</p>
				<ProgressBar
					completed={90}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#5A17B8"
					height="10px"
				/>
			</div>
		</>
	);
}

export default SingleTeamProgressbar;
