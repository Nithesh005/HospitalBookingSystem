import React from "react"
import Typography from "@mui/material/Typography"
import DoctorCard from "./doctorCard"
import image1 from "../../static/images/doctorPortrait.webp"
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
} from "@mui/material"
import { SmallButton } from "../Buttons"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
const deleteIcon = (
	<DeleteRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)
const editIcon = (
	<EditRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)

export default function DepartmentList({ departments, doctors }) {
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
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignContent: "center",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignContent: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: "1rem", sm: "1.4rem" },
										color: "#595959",
									}}
								>
									{department.name}
								</Typography>
							</div>
							<Box
								sx={{
									display: "flex",
									// flexDirection: {xs:'column', sm: 'row'},
								}}
							>
								<div
									onClick={(e) => {
										e.stopPropagation()
									}}
								>
									<SmallButton
										value={editIcon}
										color="white"
										text="#FEB139"
									/>
								</div>
								<div
									onClick={(e) => {
										e.stopPropagation()
									}}
								>
									<SmallButton
										value={deleteIcon}
										color="white"
										text="#B81C1C"
									/>
								</div>
							</Box>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						{doctors.map((doctor) => (
							<div key={doctor._id}>
								{department.doctors.includes(doctor._id) ? (
									<DoctorCard
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
