import { Grid, Typography } from "@mui/material"
import React from "react"
import SelectionCard from "../../components/doctorModule/SelectionCard"
import WelcomeCard from "../../components/doctorModule/WelcomeCard"
import DoctorsLayout from "../../layouts/DoctorsLayout"

const DoctorHome = () => {
	return (
		<>
			<DoctorsLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1rem",
							sm: "1.2rem",
						},
						display: { xs: "none", sm: "block" },
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					DashBoard
				</Typography>
				<WelcomeCard />
				<Grid container spacing={2} marginTop={2}>
					<SelectionCard value="Appointments" link='/doctor/appointments'/>
					<SelectionCard value="Patients" link='/doctor/patients'/>
					<SelectionCard value="Schedule" link='/doctor/schedule'/>
					<SelectionCard value="Profile" link='/doctor/profile'/>
				</Grid>
			</DoctorsLayout>
		</>
	)
}

export default DoctorHome