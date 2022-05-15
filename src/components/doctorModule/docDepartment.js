import React from "react"
import Typography from "@mui/material/Typography"
import image1 from "../../static/images/doctorPortrait.webp"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import DoctorCardDoc from "./doctorCardDoc"

export default function DocDepartments({ departments, doctors }) {
	return (
		<div>
			{departments.map((department) => (
				<Accordion
					key={department._id}
					sx={{
						m: "1rem",
						borderRadius: 2,
						"&:before": {
							display: "none",
						},
						backgroundColor: "#eaeaea",
					}}
				>
					<AccordionSummary>
						<Typography>{department.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{doctors.map((doctor) => (
							<div key={doctor._id}>
								{department.doctors.includes(doctor._id) ? (
									<DoctorCardDoc
										key={doctor.id}
										doctor={doctor}
										image={image1}
									/>
								) : (
									""
								)}
							</div>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}
