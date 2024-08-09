class Form:

	model_short_hand = {
		"Long Short-Term Memory (LSTM)": 'lstm',
	}
	region_short_hand = {
		"Ulaanbaatar, Mongolia": 'mongolia',
	}

	def __init__(self, form):
		self.form = form
          
	def is_validated(cls, self):
		""" 
			Checks that the form fields are in the list of accepted values (short enough to enumerate).

			Returns the boolean is_valid
		"""

		form_keys = ['region', 'model']

		is_valid = True
		for key, value in self.form.items():
			if key not in form_keys:
				is_valid = False
				break
			else:
				if key == 'region' and value not in cls.region_short_hand.keys():
					is_valid  = False
					break
				if key == 'model' and value not in cls.model_short_hand.keys():
					is_valid  = False
					break
			
		return is_valid
	
	def get_region_and_model_name(cls, self):
		""" 
			Translate region and model names to short hand to be consistent with the keras model file naming convention.

			Returns the name of the shorthanded region and model name
		"""

		region_name = cls.region_short_hand[self.form.get('region')]
		model_name = cls.model_short_hand[self.form.get('model')]

		return region_name, model_name