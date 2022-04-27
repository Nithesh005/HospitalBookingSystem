import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../../static/images/doctorPortrait.webp"
import { Box, Grid } from "@mui/material"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { MediumButton } from "../../components/Buttons"

function DoctorProfile() {
	return (
		<DoctorsLayout>
			<Typography
				sx={{
					fontSize: {
						xs: "1.2rem",
						sm: "1.4rem",
					},
					display: { xs: "none", sm: "block" },
					fontFamily: "sans-serif",
					color: "#1976D2",
				}}
				component="p"
			>
				Profile
			</Typography>
			<Card
				elevation={3}
				sx={{
					border: 1,
					borderColor: "#1976D2",
					m: "auto",
					mt: { xs: 2, sm: 7 },
					width: "85%",
					minHeight: { xs: 0, sm: 150 },
					px: { xs: 1, sm: 7 },
					py: { xs: 2, sm: 4 },
				}}
			>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						display: { xs: "none", sm: "block" },
						fontFamily: "sans-serif",
						color: "#1976D2",
						textAlign: "center",
					}}
					component="p"
				>
					Your Details
				</Typography>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={5} sx={{ mt: "1rem" }}>
						<Box
							component="div"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								mr: { xs: 2, sm: 5 },
							}}
						>
							<CardMedia
								component="img"
								sx={{
									margin: "0.4rem",
									maxWidth: { xs: 120, sm: 200 },
									maxHeight: { xs: 120, sm: 200 },
									borderRadius: 100,
								}}
								image={image}
								alt="image"
							/>
						</Box>
					</Grid>

					<Grid item xs={12} sm={7} sx={{ mt: { sm: "1rem" } }}>
						<CardContent
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Name :</b> Name
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Qualification :</b> Qualified
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Department :</b> Department
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Experience :</b> Experience
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Area of Expertise :</b> Expertise
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "1rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>OP Time :</b> day to day from this to this
							</Typography>
						</CardContent>
					</Grid>
					<div style={{ marginLeft: "auto", marginTop: 2 }}>
						<MediumButton value="Edit" color="#595959" />
					</div>
				</Grid>
			</Card>
		</DoctorsLayout>
	)
}
export default DoctorProfile