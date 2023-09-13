import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import GridItem from './components/GridItem/GridItem';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid
				container
				width="100vw"
				height="100vh"
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={2}>
					<GridItem
						name='Cherry MX Blue'
						switchData={{
							id: 'CherryBlue',
							stem_color: '68,169,255',
							stem_type: 'standard',
							stem_construction: 'standard',
							housing_top_type: 'standard',
							housing_top_color: '58,64,69',
							housing_bottom_type: 'standard',
							housing_bottom_color: '58,64,69',
							mount: 'Both'
						}}
						volume='Loud'
						type='Clicky'
					/>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
