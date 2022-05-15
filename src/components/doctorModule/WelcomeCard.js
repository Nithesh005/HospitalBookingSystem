import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { Container, Grid } from "@mui/material"
import { useSelector } from "react-redux"

const WelcomeCard = () => {
	const docName = useSelector((storeState) => storeState.doctor.name)
	const docImage = useSelector((storeState) => storeState.doctor.image)
	const [time, setTime] = useState(moment().format("h:mm a"))
	const [date, setDate] = useState(moment().format("MMMM Do"))
	const [day, setDay] = useState(moment().format("dddd"))
	setInterval(() => {
		setTime(moment().format("h:mm a"))
		setDate(moment().format("MMMM Do"))
		setDay(moment().format("dddd"))
	}, 1000)
	return (
		<Container>
			<Card
				sx={{
					m: { xs: 0, sm: 2 },
					flexDirection: { xs: "column", md: "row" },
					borderRadius: 2,
					backgroundColor: "#eaeaea",
					color: "#595959",
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{
						alignContent: "center",
						justifyContent: "center",
					}}
				>
					<Grid item xs={12} sm={3}>
						<CardContent>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1.2rem", sm: "1.5rem" },
									textAlign: "center",
									fontWeight: "bold",
								}}
							>
								{time}
							</Typography>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1.2rem", sm: "1.4rem" },
									textAlign: "center",
								}}
							>
								{day}
							</Typography>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1rem", sm: "1.4rem" },
									textAlign: "center",
								}}
							>
								{date}
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={12} sm={6.5}>
						<CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1rem", sm: "1.2rem" },
									textAlign: "center",
								}}
							>
								Welcome 
								<span
									style={{
										fontSize: { xs: "1.2rem", sm: "1.4rem" },
										fontWeight: "bold",
									}}
								>
									&nbsp; {docName}
								</span>
								, Have a great day
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						xs={6}
						sm={2.5}
						sx={{
							display: "flex",
							alignContent: "center",
							justifyContent: "center",
						}}
					>
						<CardMedia
							component="img"
							sx={{ width: 120,height:120, borderRadius: "100%", m: 1 }}
							image={docImage}
							alt="picture"
						/>
					</Grid>
				</Grid>
			</Card>
		</Container>
	)
}

export default WelcomeCard
