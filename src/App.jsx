import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import data from './data/switches.json';

import GridItem from './components/GridItem/GridItem';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className="root">
				<Grid
					container
					spacing={2}
				>
					{data.map((item) =>
						<Grid item xs={2} key={item.id}>
							<GridItem
								name={item.name}
								switchData={item.switchData}
								volume={item.volume}
								type={item.type}
							/>
						</Grid>
					)}
				</Grid>
			</div>
		</ThemeProvider>
	)
}

export default App
